// Prisma client singleton — v2 with User/Invoice/InvoiceItem models
import { PrismaClient } from "../../generated/prisma";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "path";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  __prismaVersion?: string;
};

const PRISMA_VERSION = "v2"; // Bump this when schema changes

function createPrismaClient() {
  // Read database path from env or default to local dev.db
  let dbUrl = process.env.DATABASE_URL || `file:${path.join(process.cwd(), "dev.db")}`;
  if (!dbUrl.startsWith("file:")) {
    dbUrl = `file:${dbUrl}`;
  }
  const dbPath = dbUrl.substring(5);
  // Prisma 7 adapter expects { url: "file:..." } config object
  const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
  return new PrismaClient({ adapter });
}

// Invalidate cache if schema version changed
if (globalForPrisma.__prismaVersion !== PRISMA_VERSION) {
  globalForPrisma.prisma = undefined;
  globalForPrisma.__prismaVersion = PRISMA_VERSION;
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
