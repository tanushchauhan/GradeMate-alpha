"use client";

import { globalContext } from "@/app/providers";
import ThemeToggler from "@/components/Header/ThemeToggler";
import { deleteCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function AssignmentItem({ data, updateModalStatus, id }) {
  return (
    <div
      className="grid grid-cols-1 items-center justify-items-center sm:justify-items-start sm:grid-cols-[25%_1fr_1fr] p-4 gap-y-4 cursor-pointer font-bold rounded-xl text-slate-800 dark:text-slate-200 border-4"
      style={{
        borderColor: `${
          data[3] === "Progress Check for Learning"
            ? "rgb(8 145 178 / var(--tw-bg-opacity)"
            : "rgb(79 70 229)"
        }`,
      }}
      onClick={() => updateModalStatus(true, id)}
    >
      <span className="lg:text-xl">{data[0]}</span>
      <span className="text-center lg:text-xl">{data[2]}</span>
      <span
        className={`sm:justify-self-end text-3xl sm:text-xl p-2 rounded-xl ${
          Number(data[4])
            ? Number(data[4]) >= 90
              ? "bg-green-700"
              : Number(data[4]) >= 70
              ? "bg-amber-600"
              : "bg-red-700"
            : ""
        }`}
      >
        {Number(data[4]) ? Number(data[4]) : data[4]} / {Number(data[5])}
      </span>
    </div>
  );
}

function Com({ params }) {
  const { updateChangeTheHeader } = useContext(globalContext);

  let store =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("data"))
      : null;
  const perNum = Number(params.id.substring(params.id.length - 1));
  const code = params.id.substring(0, params.id.length - 1);
  let data;
  try {
    data = store[perNum].data.filter((e) => e.courseCode === code)[0];
  } catch {
    data = null;
  }

  const router = useRouter();

  const [per, setPer] = useState(data?.studentGrade); // in future update the state to do whatif
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [openUser, setOpenUser] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function updateModalStatus(status, id) {
    document.querySelector("html").classList.toggle("overflow-hidden");

    if (status) {
      setModalData(data.assignmentData[id + 1]);
    }
    setShowModal(status);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-2 text-slate-200">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div
                className="backdrop-blur-sm fixed inset-0 z-40"
                onClick={() => updateModalStatus(false)}
              ></div>
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-700 outline-none focus:outline-none z-[55]">
                {/*header*/}
                <div className="flex items-center justify-between p-5  rounded-t">
                  <h3 className="text-3xl font-semibold">Assignemnt Details</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => updateModalStatus(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      className="w-14 h-14 stroke-slate-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-center flex-col gap-2 bg-primary p-3 rounded-3xl z-50">
                      <p className="font-bold text-center">
                        Type of Assignment
                      </p>
                      <p className="text-xl  text-slate-100 font-semibold text-center">
                        {modalData[3]}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 my-2">
                      <div className="flex items-center flex-col gap-2 justify-center bg-primary p-3 rounded-3xl">
                        <p className="font-bold text-center">Date Assigned</p>
                        <p className="text-xl  text-slate-100 font-semibold text-center">
                          {modalData[1].trim() === "" ? "None" : modalData[1]}
                        </p>
                      </div>
                      <div className="flex items-center flex-col gap-2 justify-center bg-primary p-3 rounded-3xl">
                        <p className="font-bold text-center">Date Due</p>
                        <p className="text-xl  text-slate-100 font-semibold text-center">
                          {modalData[0].trim() === "" ? "None" : modalData[0]}
                        </p>
                      </div>
                      <div className="flex items-center flex-col gap-2 justify-center bg-primary p-3 rounded-3xl">
                        <p className="font-bold text-center">Score</p>
                        <p className="text-xl  text-slate-100 font-semibold text-center">
                          {modalData[4].trim() === "" ? "None" : modalData[4]} /{" "}
                          {modalData[5]}
                        </p>
                      </div>
                      <div className="flex items-center flex-col gap-2 justify-center bg-primary p-3 rounded-3xl">
                        <p className="font-bold text-center">Weighted Points</p>
                        <p className="text-xl  text-slate-100 font-semibold text-center">
                          {modalData[7].trim() === "" ? "None" : modalData[7]} /{" "}
                          {modalData[8]}
                        </p>
                      </div>
                      <div className="flex items-center flex-col gap-2 justify-center bg-primary p-3 rounded-3xl">
                        <p className="font-bold text-center">Weight</p>
                        <p className="text-xl  text-slate-100 font-semibold text-center">
                          {modalData[6].trim() === "" ? "None" : modalData[6]}
                        </p>
                      </div>
                      <div className="flex items-center flex-col gap-2 justify-center bg-primary p-3 rounded-3xl">
                        <p className="font-bold text-center">Percentage</p>
                        <p className="text-xl  text-slate-100 font-semibold text-center">
                          {Number(modalData[9]) ? Number(modalData[9]) : "0.0"}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      <section className="relative z-10 overflow-hidden pt-7">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  {data?.courseName}
                </h1>

                <button
                  className="bg-primary px-4 py-2 text-white hover:bg-primary/90"
                  onClick={() => params.update("home")}
                >
                  Go Back To Dashboard
                </button>
              </div>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <Link
                      href="/"
                      className="pr-1 text-base font-medium text-body-color hover:text-primary"
                    >
                      Home
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                  </li>
                  <li className="flex items-center">
                    <Link
                      href="/dashboard"
                      className="pr-1 text-base font-medium text-body-color hover:text-primary"
                    >
                      Dashboard
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                  </li>
                  <li className="text-base font-medium text-primary">
                    {params.id}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute left-0 top-0 z-[-1]">
            <svg
              width="287"
              height="254"
              viewBox="0 0 287 254"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                fill="url(#paint0_linear_111:578)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_111:578"
                  x1="-40.5"
                  y1="117"
                  x2="301.926"
                  y2="-97.1485"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-0 top-0 z-[-1]">
            <svg
              width="628"
              height="258"
              viewBox="0 0 628 258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                fill="url(#paint0_linear_0:1)"
              />
              <path
                opacity="0.1"
                d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                fill="url(#paint1_linear_0:1)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0:1"
                  x1="644"
                  y1="221"
                  x2="429.946"
                  y2="37.0429"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0:1"
                  x1="18.3648"
                  y1="166.016"
                  x2="105.377"
                  y2="32.3398"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </section>
      <section className="overflow-hidden pt-28 lg:pt-[150px] container mb-10">
        <div className="grid grid-cols-1 gap-y-16 md:gap-y-0 md:grid-cols-[30%_1fr]">
          <CircularProgressbarWithChildren
            value={per}
            styles={buildStyles({
              pathColor: `#4A6CF7`,
              trailColor: "#d6d6d6",
            })}
          >
            <div className="text-5xl bg-gradient-to-r from-blue-600 dark:via-indigo-300 via-indigo-900 dark:to-[#4A6CF7] to-[#4A6CF7] inline-block text-transparent bg-clip-text font-bold">
              {per}%
            </div>
          </CircularProgressbarWithChildren>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl text-center">{data?.courseName}</h2>
            <h3 className="text-3xl mt-5 text-slate-500">Period: {perNum}</h3>
            <div className="grid grid-rows-2 items-start justify-items-start">
              <div className="flex gap-2 items-center justify-center mt-5">
                <div className="inline-block w-8 h-8 border-indigo-600/60 border-4"></div>
                <span className="text-md dark:text-slate-300 text-slate-600">
                  {" "}
                  - Assessment of Learning
                </span>
              </div>
              <div className="flex gap-2 items-center justify-center mt-5">
                <div className="inline-block w-8 h-8 border-cyan-600/60 border-4"></div>
                <span className="text-md dark:text-slate-300 text-slate-600">
                  {" "}
                  - Progress Check for Learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mb-10 dark:bg-slate-800 bg-gray-light py-10">
        <p className="text-xl mb-11 dark:text-slate-400 text-slate-600 font-semibold text-center">
          Click on each assignment for more details.
        </p>
        <div className="flex flex-col gap-5">
          {data?.assignmentData?.length
            ? data.assignmentData
                .slice(1)
                .map((e, i) => (
                  <AssignmentItem
                    data={e}
                    key={i}
                    updateModalStatus={updateModalStatus}
                    id={i}
                  />
                ))
            : "There are no assignments to show at this time."}
        </div>
      </section>
    </motion.div>
  );
}

export default Com;
