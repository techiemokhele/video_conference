import type { Metadata } from "next";
import React, { ReactNode } from "react";

//custom
import NavbarComponent from "@/components/layout/NavbarComponent";
import SidebarComponent from "@/components/layout/SidebarComponent";

export const metadata: Metadata = {
  title: "Neo Mokhele | Video Conference",
  description:
    "Experience seamless video calling with Neo Mokhele's innovative web app. Connect effortlessly with friends, family, and colleagues through high-quality video conferencing.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      {/*navbar section*/}
      <NavbarComponent />

      {/*sidebar section*/}
      <div className="flex">
        <SidebarComponent />

        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-12 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
