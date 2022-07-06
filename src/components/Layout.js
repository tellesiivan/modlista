import React from "react";
import Header from "./Header";
import MobileNav from "./mobile/MobileNav";
import AuthModal from "./modals/AuthModal";
import MainModal from "./modals/MainModal";
import Sidebar from "./modals/Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="h-full">
        {children}
        <MobileNav />
      </main>
      <AuthModal />
      <MainModal />
      <Sidebar active={true} />
    </>
  );
}
