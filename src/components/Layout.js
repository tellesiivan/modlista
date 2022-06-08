import React from "react";
import Header from "./Header";
import AuthModal from "./modals/AuthModal";
import Sidebar from "./modals/Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="h-full">{children}</main>
      <AuthModal />
      <Sidebar active={true} />
    </>
  );
}
