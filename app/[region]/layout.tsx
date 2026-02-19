import { notFound } from "next/navigation";

const allowed = new Set(["us", "in"]);

export default async function RegionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;

  if (!allowed.has(region)) notFound();

  return <>{children}</>;
}
