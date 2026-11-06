import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./sidebar";
import Footer from "./footer";

function Layout() {
  const { pathname, state } = useLocation();

  // New page -> top. Navigating "to a section of home" -> scroll to that section.
  useEffect(() => {
    const target = state && state.scrollTo && document.getElementById(state.scrollTo);
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, state]);

  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
