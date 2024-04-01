"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import {
  add,
  differenceInDays,
  endOfMonth,
  format,
  setDate,
  startOfMonth,
  sub,
} from "date-fns";

function Calender() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const numDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();

  const prevMonth = () => setCurrentDate((e) => sub(e, { months: 1 }));
  const nextMonth = () => setCurrentDate((e) => add(e, { months: 1 }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <div className="container">
        <div className="grid grid-cols-7">
          <div onClick={prevMonth}>{"<"}</div>
          <div className=" col-span-5">Welcome to the calender</div>
          <div onClick={nextMonth}>{">"}</div>
          {weeks.map((week) => (
            <div className="text-xs font-bold uppercase" key={week}>
              {week}
            </div>
          ))}

          {Array.from({ length: prefixDays }).map((_, index) => (
            <div key={index} />
          ))}

          {Array.from({ length: numDays }).map((_, index) => {
            const date = index + 1;

            return <div key={date}>{date}</div>;
          })}

          {Array.from({ length: suffixDays }).map((_, index) => (
            <div key={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Calender;
