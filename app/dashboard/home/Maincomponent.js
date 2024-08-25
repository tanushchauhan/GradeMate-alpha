"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Loader from "@/components/ui/Loader";
import { deleteCookie, getCookie, hasCookie } from "cookies-next";
import GpaVal from "./GpaVal";
import { useQueryClient } from "@tanstack/react-query";
import { globalContext } from "../../providers";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

function GradeCard({ data, periodNumber, setCurrentView }) {
  const router = useRouter();
  return (
    <div
      className="w-25 h-25 border-blue-600 border-2 p-6 rounded-2xl cursor-pointer"
      onClick={() => setCurrentView(`${data.courseCode}${periodNumber}`)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-y-0 gap-y-5 item-center justify-items-center">
        <div className="flex items-center justify-self-center lg:justify-items-start">
          <h2 className="font-bold text-2xl ml-3 text-center">
            {data.courseName}
          </h2>
        </div>
        <div className="flex items-center">
          <h2 className="font-bold text-2xl ml-3 text-slate-500">
            {data.courseCode}
          </h2>
        </div>
        <div className="flex items-center">
          <h2 className="font-bold text-2xl ml-3 text-slate-500 text-center">
            {data.assignmentData?.length - 1
              ? data.assignmentData?.length - 1
              : 0}{" "}
            assignments
          </h2>
        </div>

        <div className="ml-3">
          <p className=" text-6xl bg-gradient-to-r from-blue-600 dark:via-indigo-300 via-indigo-900 dark:to-[#4A6CF7] to-[#4A6CF7] inline-block text-transparent bg-clip-text font-bold">
            {data.studentGrade}%
          </p>
        </div>
      </div>
    </div>
  );
}

const loadingSVG = (
  <svg
    className="animate-spin -ml-1 mr-3 h-10 w-10 text-indigo-400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const reloadIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10 stroke-indigo-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
    />
  </svg>
);

function Maincomponent({ setCurrentView }) {
  const router = useRouter();
  const periodNumSelector = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [mainReloadBtn, setMainReloadBtn] = useState(false);

  const initialVal =
    typeof window !== "undefined"
      ? sessionStorage.getItem(`data`) && sessionStorage.getItem("currPeriod")
        ? JSON.parse(sessionStorage.getItem(`data`))[
            sessionStorage.getItem("currPeriod")
          ]
        : null
      : null;
  const initialValLoading =
    typeof window !== "undefined"
      ? sessionStorage.getItem(`data`) && sessionStorage.getItem("currPeriod")
        ? false
        : true
      : true;
  const [currentData, setCurrentData] = useState(initialVal);
  const [loading, setLoading] = useState(initialValLoading);

  const queryClient = useQueryClient();

  const { gpaTimeChanged, updateGpaTimeChanged, updateChangeTheHeader } =
    useContext(globalContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function runThis() {
      if (!hasCookie("token")) {
        router.push("/signin");
      } else if (!sessionStorage.getItem("data")) {
        const options = { onlyPeriod: false, periodNumNeeded: null };
        const token = getCookie("token");
        const dataToSend = { token, options };
        const res = await fetch("/api/hac/courses", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend),
        });

        try {
          let data = await res.json();
          if (!data.success) {
            deleteCookie("token");
            router.push("/signin");
            return;
          } else {
            const perNum = data.periodNumber;
            const dataToStore = {};
            dataToStore[`${perNum}`] = data;
            sessionStorage.setItem(`data`, JSON.stringify(dataToStore));
            sessionStorage.setItem("currPeriod", perNum);
            sessionStorage.setItem("perCurrPeriod", perNum);
            updateChangeTheHeader(true);
            let initialData = {};
            let initialPeriod;
            initialData = JSON.parse(sessionStorage.getItem(`data`));
            initialPeriod = sessionStorage.getItem("currPeriod");
            setCurrentData(initialData[initialPeriod]);
            setLoading(false);
            if (data.studentName === "Demo User") {
              toast(
                "You are using the Demo Account!\nGrades would be same accross marking periods.",
                {
                  icon: "😀",
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                }
              );
            }
            return;
          }
        } catch (e) {
          console.error(e);
          deleteCookie("token");
          router.push("/signin");
          return;
        }
      } else {
        if (!loading) return;
        let initialData = {};
        let initialPeriod;
        initialData = JSON.parse(sessionStorage.getItem(`data`));
        initialPeriod = sessionStorage.getItem("currPeriod");
        setCurrentData(initialData[initialPeriod]);
        updateUserName(initialData[initialPeriod].studentName);
        setLoading(false);
      }
    }
    runThis();
  }, [router, loading, updateChangeTheHeader]);

  async function mainRefetch() {
    if (mainReloadBtn) return;
    if (!isLoading) setIsLoading(true);
    const options = { onlyPeriod: false, periodNumNeeded: null };
    const token = getCookie("token");
    const dataToSend = { token, options };
    const res = await fetch("/api/hac/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });

    try {
      let data = await res.json();
      if (!data.success) {
        deleteCookie("token");
        console.error("API server down!");
        router.push("/signin");
        return;
      } else {
        const perNum = data.periodNumber;
        const dataToStore = {};
        dataToStore[`${perNum}`] = data;
        sessionStorage.setItem(`data`, JSON.stringify(dataToStore));
        sessionStorage.setItem("currPeriod", perNum);
        sessionStorage.setItem("perCurrPeriod", perNum);
        updateChangeTheHeader(true);
        let initialData = {};
        let initialPeriod;
        initialData = JSON.parse(sessionStorage.getItem(`data`));
        initialPeriod = sessionStorage.getItem("currPeriod");
        setCurrentData(initialData[initialPeriod]);
        setIsLoading(false);
        setMainReloadBtn(false);
        return;
      }
    } catch (e) {
      console.error(e);
      deleteCookie("token");
      router.push("/signin");
      return;
    }
  }

  async function handleChange(e) {
    if (e.target.value === currentData.periodNumber) return;
    const value = e.target.value;
    if (typeof window !== "undefined") {
      sessionStorage.setItem("currPeriod", value);
    }
    setIsLoading(true);
    const currData =
      typeof window !== "undefined"
        ? JSON.parse(sessionStorage.getItem(`data`))
        : null;
    if (currData[value]) {
      setCurrentData(currData[value]);
      setIsLoading(false);
      return;
    }
    const token = getCookie("token");

    const dataToSend = {
      token,
      options: { onlyPeriod: true, periodNumber: value },
    };
    const res = await fetch("/api/hac/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });
    try {
      const resData = await res.json();
      const preNum = resData.periodNumber;
      const currData =
        typeof window !== "undefined"
          ? JSON.parse(sessionStorage.getItem("data"))
          : null;
      currData[`${preNum}`] = resData;
      if (typeof window !== "undefined") {
        sessionStorage.setItem("data", JSON.stringify(currData));
      }
      setCurrentData(resData);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      router.push("/error");
    }
  }

  function handleRefetchClick() {
    if (gpaTimeChanged === 0) {
      queryClient.invalidateQueries(["gpa"]);
      updateGpaTimeChanged(queryClient.getQueryState(["gpa"]).dataUpdateCount);
    } else {
      const x = queryClient.getQueryState(["gpa"]);
      if (gpaTimeChanged === x.dataUpdateCount) {
        return;
      } else {
        queryClient.invalidateQueries(["gpa"]);
        updateGpaTimeChanged(
          queryClient.getQueryState(["gpa"]).dataUpdateCount
        );
      }
    }
  }

  if (!hasCookie("token") || loading) {
    return <Loader />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {isLoading ? <Loader /> : null}
      <section className="relative z-10 overflow-hidden pt-7">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Dashboard
                </h1>

                <p className="text-base font-medium leading-relaxed text-body-color">
                  {`Welcome Back! ${currentData?.studentName}`}
                </p>
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
                  <li className="text-base font-medium text-primary">
                    Dashboard
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
      <div className="container mb-10">
        <div className="mb-10 lg:mt-0 mt-10 flex items-start justify-center flex-col gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <div>
            <span className="text-xl font-semibold">Marking Period: </span>
            <select
              className=" bg-slate-100 dark:bg-slate-700 px-8 py-1 text-lg rounded-lg"
              ref={periodNumSelector}
              onChange={handleChange}
              value={currentData?.periodNumber}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <div className="mt-3 text-xl text-slate-400">
              Click each subject for more info
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                setMainReloadBtn(true);
                mainRefetch();
              }}
            >
              {mainReloadBtn ? loadingSVG : reloadIcon}
            </button>
          </div>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 md:gap-x-6 lg:grid-cols-1 lg:gap-x-0 gap-y-6">
          {currentData?.data?.map((e) => (
            <GradeCard
              data={e}
              key={e.courseCode}
              periodNumber={currentData?.periodNumber}
              setCurrentView={setCurrentView}
            />
          ))}
        </div>
        <div className="mt-10 p-8 dark:bg-slate-800 bg-gray-light">
          <h2 className="text-3xl">GPA</h2>
          <h2 className="text-2xl mt-2 text-slate-400">Predicted Weighted</h2>
          <GpaVal setCurrentData={setCurrentData} />
          <button className="block" onClick={handleRefetchClick}>
            {reloadIcon}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
export default Maincomponent;
