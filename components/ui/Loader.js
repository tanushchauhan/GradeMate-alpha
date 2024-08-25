"use client";

import { useEffect } from "react";

function Loader() {
  useEffect(() => {
    document.querySelector("html").classList.toggle("overflow-hidden");
    return () =>
      document.querySelector("html").classList.toggle("overflow-hidden");
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 dark:bg-slate-700/20 z-40 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
