import { AdminSidebar } from "@/components";
import AdminBreadcrumbs from "@/components/AdminBreadcrumbs";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen pt-16">
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset className="flex flex-1 flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-card px-6">
            <SidebarTrigger className="h-8 w-8" />
            <div className="ml-4">
              <AdminBreadcrumbs />
            </div>
            <div className="flex-1" />
          </header>
          <main className="flex-1 p-6">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
