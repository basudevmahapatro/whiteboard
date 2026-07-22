"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

import { NavMain } from "@/components/shadcn-space/blocks/dashboard-shell-01/nav-main";
import {
  Home,
  LayoutDashboard,
  Users,
  Clock,
  Trash2,
  Settings,
  Pen,
} from "lucide-react";
import { SiteHeader } from "@/components/shadcn-space/blocks/dashboard-shell-01/site-header";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export const navData = [
  { label: "WORKSPACE", isSection: true },
  { title: "Home", icon: Home, href: "/workspace" },
  { title: "My Canvases", icon: LayoutDashboard, href: "/workspace/myCanvases" },
  { title: "Shared with Me", icon: Users, href: "/workspace/sharedWithMe" },
  { title: "Recents", icon: Clock, href: "/workspace/recents" },
  // { label: "GENERAL", isSection: true },
  // { title: "Trash", icon: Trash2, href: "/trash" },
  // { title: "Settings", icon: Settings, href: "/settings" },
];


const AppSidebar = ({
  children
}) => {
  return (
    <SidebarProvider>
      <Sidebar className="py-4 px-0 bg-background">
        <div className="flex flex-col gap-6 bg-background">
          <SidebarHeader className="px-6 py-2">
            <div className="flex items-center gap-2.5 pointer-events-none select-none">
              <h1 className="text-xl md:text-2xl font-black tracking-tight text-black dark:text-white">
                Drawkitect
              </h1>
            </div>
          </SidebarHeader>

          <SidebarContent className="overflow-hidden gap-0 px-0">
            <SimpleBar autoHide={true} className="h-full border-b border-border">
              <div className="px-4">
                <NavMain items={navData} />
              </div>
            </SimpleBar>
          </SidebarContent>
        </div>
      </Sidebar>

      <div className="flex flex-1 flex-col">
        <header
          className="sticky top-0 z-50 flex items-center border-b px-6 py-3 bg-background">
          <SiteHeader />
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default AppSidebar;
