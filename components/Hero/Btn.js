"use client";

function Btn() {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();

        document.querySelector("#ahead").scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
    >
      Learn more 👇
    </button>
  );
}

export default Btn;
