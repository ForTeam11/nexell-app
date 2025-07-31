import { Sidebar } from "@/components/Sidebar";
export default function IngresosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-base-100">
      <Sidebar />
      <main className="flex-1 p-4 rounded-xl bg-base-300 ml-0 m-4">{children}</main>
    </div>
    
  );
}
