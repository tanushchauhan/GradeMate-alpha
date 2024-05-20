"use client";
import Link from "next/link";

function ClientLink() {
  return (
    <Link
      href={"/signin"}
      className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
    >
      Check it out 👀
    </Link>
  );
}

export default ClientLink;
