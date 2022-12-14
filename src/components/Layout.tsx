import * as React from "react";
import Footer from "./Footer";
import Header from "./Header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
