import React from "react";
import Header from "./Header";
import AuthModal from "./modals/AuthModal";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="gridBg">{children}</main>
      <AuthModal />
    </>
  );
}
