import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Container(props: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex max-w-100 items-center flex-col flex-grow">
        {props?.children}
      </main>
      <Footer />
    </div>
  );
}
