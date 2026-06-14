import { redirect } from "next/navigation";
import { getAuthUser, getInvoiceCount } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import GenerateurDashboard from "./GenerateurDashboard";

export default async function GenerateurPage({
  searchParams,
}: {
  searchParams: Promise<{ subscribed?: string }>;
}) {
  const user = await getAuthUser();
  if (!user) {
    redirect("/login");
  }

  const invoiceCount = await getInvoiceCount(user.id);

  const invoices = await prisma.invoice.findMany({
    where: { userId: user.id },
    include: { items: true },
    orderBy: { createdAt: "desc" },
  });

  const params = await searchParams;
  const justSubscribed = params.subscribed === "true";

  return (
    <GenerateurDashboard
      user={{
        id: user.id,
        email: user.email,
        companyName: user.companyName,
        hasActiveSubscription: user.hasActiveSubscription,
      }}
      invoiceCount={invoiceCount}
      invoices={invoices.map((inv) => ({
        id: inv.id,
        invoiceNumber: inv.invoiceNumber,
        issueDate: inv.issueDate.toISOString(),
        clientName: inv.clientName,
        totalTTC: inv.totalTTC,
      }))}
      justSubscribed={justSubscribed}
    />
  );
}
