"use client";

import toast from "react-hot-toast";

function Btn() {
  return (
    <button
      onClick={() =>
        toast("GradeMate will be open-sourced after full release", {
          icon: "⏳",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        })
      }
      className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
    >
      Star on GitHub
    </button>
  );
}

export default Btn;
