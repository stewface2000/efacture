const { PrismaClient } = require("./generated/prisma");
const { PrismaBetterSqlite3 } = require("@prisma/adapter-better-sqlite3");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "dev.db");
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Starting E2E Verification for Invoice Upload...");
  
  // 1. Clean up existing test database entries
  await prisma.consultation.deleteMany({
    where: {
      clientEmail: "test-upload-e2e@example.com"
    }
  });
  console.log("Cleaned up old test database records.");

  // 2. Start next dev server
  console.log("Starting Next.js dev server...");
  const devEnv = { ...process.env };
  // Prepend x64 node path
  devEnv.Path = "c:\\Users\\steph\\OneDrive\\Documents\\MyApps\\Electronic invoice\\efacture\\.node-x64;" + devEnv.Path;
  
  const nextDev = spawn("cmd.exe", ["/c", "npm.cmd run dev"], {
    cwd: "c:\\Users\\steph\\OneDrive\\Documents\\MyApps\\Electronic invoice\\efacture",
    env: devEnv,
    shell: true
  });

  let serverStarted = false;

  // Let's watch output
  nextDev.stdout.on("data", (data) => {
    const text = data.toString();
    console.log("[Next.js Dev]", text.trim());
    if (text.includes("Ready in") || text.includes("localhost:3000") || text.includes("started server")) {
      serverStarted = true;
    }
  });

  nextDev.stderr.on("data", (data) => {
    console.error("[Next.js Dev Error]", data.toString().trim());
  });

  // Helper to sleep
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Wait for server to start (max 15 seconds)
  let waited = 0;
  while (!serverStarted && waited < 15) {
    await sleep(1000);
    waited++;
  }
  
  console.log("Server should be ready, sleeping 3 seconds to be sure...");
  await sleep(3000);

  try {
    // 3. Perform a POST to create consultation with invoice file
    console.log("Sending POST request to /api/consultation...");
    
    const formData = new FormData();
    formData.append("email", "test-upload-e2e@example.com");
    formData.append("profession", "Artiste Peintre");
    formData.append("legalStatus", "EI");
    formData.append("monthlyVolume", "10");
    formData.append("currentTools", "Papier");
    formData.append("specificNeeds", "Comment gérer mes factures de pinceaux ?");
    
    // Create a mock file
    const fileContent = "mock pdf file contents";
    const fileBlob = new Blob([fileContent], { type: "application/pdf" });
    formData.append("invoiceFile", fileBlob, "test-my-invoice.pdf");

    const postResponse = await fetch("http://localhost:3000/api/consultation", {
      method: "POST",
      body: formData,
    });

    if (!postResponse.ok) {
      const errText = await postResponse.text();
      throw new Error(`POST /api/consultation failed: ${postResponse.status} ${errText}`);
    }

    const postData = await postResponse.json();
    console.log("POST Response:", postData);

    if (!postData.checkoutUrl) {
      throw new Error("Missing checkoutUrl in response");
    }

    // 4. Verify in DB
    console.log("Verifying consultation in SQLite database...");
    const dbRecord = await prisma.consultation.findFirst({
      where: { clientEmail: "test-upload-e2e@example.com" }
    });

    if (!dbRecord) {
      throw new Error("No database record found for test-upload-e2e@example.com");
    }

    console.log("Database Record found:", dbRecord);

    if (!dbRecord.invoiceUrl) {
      throw new Error("Database record invoiceUrl is null or empty");
    }

    if (!dbRecord.invoiceUrl.startsWith("/uploads/invoice-")) {
      throw new Error(`Database record invoiceUrl is invalid: ${dbRecord.invoiceUrl}`);
    }

    // 5. Verify the file exists on disk
    const publicPath = path.join("c:\\Users\\steph\\OneDrive\\Documents\\MyApps\\Electronic invoice\\efacture\\public", dbRecord.invoiceUrl);
    console.log(`Checking physical file existence at: ${publicPath}`);
    if (!fs.existsSync(publicPath)) {
      throw new Error(`Physical file does not exist at ${publicPath}`);
    }
    console.log("Physical file verified on disk!");

    // Set paymentStatus = PAID to simulate successful checkout, so the admin page fetches it
    await prisma.consultation.update({
      where: { id: dbRecord.id },
      data: { paymentStatus: "PAID" }
    });
    console.log("Updated payment status to PAID in database for testing admin fetch.");

    // 6. Test the admin API route
    console.log("Sending GET request to /api/admin/consultations...");
    const adminResponse = await fetch("http://localhost:3000/api/admin/consultations?password=admin123");
    if (!adminResponse.ok) {
      const errText = await adminResponse.text();
      throw new Error(`GET /api/admin/consultations failed: ${adminResponse.status} ${errText}`);
    }

    const adminData = await adminResponse.json();
    console.log("Admin consultations list response size:", adminData.consultations ? adminData.consultations.length : 0);
    
    const foundInList = adminData.consultations.find(c => c.id === dbRecord.id);
    if (!foundInList) {
      throw new Error("Test consultation was not found in admin consultations list");
    }

    console.log("Found consultation in admin list:", foundInList);
    if (foundInList.invoiceUrl !== dbRecord.invoiceUrl) {
      throw new Error(`Admin list invoiceUrl (${foundInList.invoiceUrl}) does not match db (${dbRecord.invoiceUrl})`);
    }
    console.log("Admin API route returns invoiceUrl successfully!");

    // Clean up created file
    fs.unlinkSync(publicPath);
    console.log("Cleaned up test uploaded file from disk.");

    // Clean up database record
    await prisma.consultation.delete({
      where: { id: dbRecord.id }
    });
    console.log("Cleaned up database record.");

    console.log("🎉 SUCCESS! End-to-end verification completed successfully!");
  } catch (err) {
    console.error("❌ Test failed:", err);
    process.exitCode = 1;
  } finally {
    console.log("Stopping dev server...");
    nextDev.kill("SIGTERM");
    // Ensure all processes killed on Windows
    const { execSync } = require("child_process");
    try {
      execSync("taskkill /pid " + nextDev.pid + " /T /F");
    } catch (e) {
      // Ignore if already dead
    }
    await prisma.$disconnect();
    console.log("Disconnected Prisma Client.");
  }
}

main();
