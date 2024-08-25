"use client";

import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

function Page() {
  const [data, setData] = useState("sup");
  useEffect(() => {
    async function h() {
      const token = getCookie("token");
      const dataToSend = { token, options: { getUpAssign: true } };
      const res = await fetch("/api/hac/calender", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });
      const vals = await res.json();
      console.log(vals);
    }
    h();
  }, []);
  return <div>{data}</div>;
}

export default Page;
