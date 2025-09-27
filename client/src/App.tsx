import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AppSidebar } from "@/components/AppSidebar";
import LandingPage from "@/pages/LandingPage";
import Dashboard from "@/pages/Dashboard";
import Medicines from "@/pages/Medicines";
import Analytics from "@/pages/Analytics";
import AddMedicine from "@/pages/AddMedicine";
import FamilySharing from "@/pages/FamilySharing";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/medicines" component={Medicines} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/add" component={AddMedicine} />
      <Route path="/family" component={FamilySharing} />
      <Route component={NotFound} />
    </Switch>
  );
}

function DashboardLayout() {
  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1">
          <header className="flex items-center justify-between p-4 border-b">
            <SidebarTrigger data-testid="button-sidebar-toggle" />
            <ThemeToggle />
          </header>
          <main className="flex-1 overflow-auto p-6">
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/medicines" component={Medicines} />
              <Route path="/analytics" component={Analytics} />
              <Route path="/add" component={AddMedicine} />
              <Route path="/family" component={FamilySharing} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider defaultTheme="light" storageKey="mediremind-theme">
          <Toaster />
          <Switch>
            <Route path="/" component={LandingPage} />
            <Route path="/dashboard/*?" component={DashboardLayout} />
            <Route path="/medicines/*?" component={DashboardLayout} />
            <Route path="/analytics/*?" component={DashboardLayout} />
            <Route path="/add/*?" component={DashboardLayout} />
            <Route path="/family/*?" component={DashboardLayout} />
            <Route component={NotFound} />
          </Switch>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
