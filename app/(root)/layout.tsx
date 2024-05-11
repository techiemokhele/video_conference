import type { Metadata } from "next";
import React, { ReactNode } from "react";
import StreamVideoProvider from "@/providers/StreamClientProvider";

export const metadata: Metadata = {
  title: "Neo Mokhele | Video Conference",
  description:
    "Experience seamless video calling with Neo Mokhele's innovative web app. Connect effortlessly with friends, family, and colleagues through high-quality video conferencing.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
