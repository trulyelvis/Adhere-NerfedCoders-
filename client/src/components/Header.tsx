// Remove alias imports and use relative paths instead

import { Button } from "../components/ui/button";
import { ThemeToggle } from "../components/ThemeToggle";
import { Link } from "wouter";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { Zap, GitBranch, Users, ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold text-primary" data-testid="text-logo">
            Adhere+
          </h1>
        </div>

        <div className="flex items-center space-x-6">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  <Zap className="w-4 h-4" />
                  Features
                  <ChevronDown className="w-3 h-3" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="grid gap-1">
                      <h4 className="font-medium leading-none">Smart Reminders</h4>
                      <p className="text-sm text-muted-foreground">Never miss a dose with intelligent notifications</p>
                    </div>
                    <div className="grid gap-1">
                      <h4 className="font-medium leading-none">Family Sharing</h4>
                      <p className="text-sm text-muted-foreground">
                        Keep loved ones informed about medication adherence
                      </p>
                    </div>
                    <div className="grid gap-1">
                      <h4 className="font-medium leading-none">Analytics</h4>
                      <p className="text-sm text-muted-foreground">Track your progress with detailed insights</p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-accent">
                  <GitBranch className="w-4 h-4" />
                  Workflow
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-accent">
                  <Users className="w-4 h-4" />
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/dashboard">
              <Button data-testid="button-enter-app">Log in</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
