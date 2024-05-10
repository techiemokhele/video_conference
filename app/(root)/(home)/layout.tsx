import React, { ReactNode } from "react";

//custom
import NavbarComponent from "@/components/layout/NavbarComponent";
import SidebarComponent from "@/components/layout/SidebarComponent";

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
