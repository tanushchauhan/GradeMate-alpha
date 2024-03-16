"use client";

import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";

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

function giveGPAs(periodObj) {
  let sum = 0;
  let numSum = 0;
  for (let i = 0; i < periodObj.data.length; i++) {
    let weight = 5.0;
    try {
      weight = periodObj.data[i].weightDetails.weight;
    } catch {}
    const grade = Math.round(periodObj.data[i].studentGrade);
    for (let o = 100; o !== grade; o--) {
      weight -= 0.1;
    }
    weight = Number(weight.toFixed(3));
    sum += weight;
    numSum++;
  }
  return { sum, numSum };
}

function getGPA() {
  let transData = {};
  let currData = {};
  let currPer = -1;
  if (typeof window !== "undefined") {
    transData = JSON.parse(sessionStorage.getItem("trans"));
    currData = JSON.parse(sessionStorage.getItem("data"));
    currPer = JSON.parse(sessionStorage.getItem("currPeriod"));
  }

  let sumNumGPA = 0;

  for (let p = 1; p < Object.keys(transData).length; p++) {
    for (let r = 1; r < transData[p]["transPerGradeData2"].length; r++) {
      if (
        transData[p]["transPerGradeData2"][r][2] !== "" &&
        transData[p]["transPerGradeData2"][r][2] !== "P" &&
        transData[p]["transPerGradeData2"][r][0].substring(0, 2) !== "EA"
      )
        sumNumGPA++;
      if (
        transData[p]["transPerGradeData2"][r][3] !== "" &&
        transData[p]["transPerGradeData2"][r][3] !== "P" &&
        transData[p]["transPerGradeData2"][r][0].substring(0, 2) !== "EA"
      )
        sumNumGPA++;
    }
  }
  let currGPA = Number(transData["transPerRankData"][1][1]);
  let sumAllGPA = currGPA * sumNumGPA;
  let sumToAdd = 0;
  let numSumToAdd = 0;
  if (currPer === 2) {
    const { sum: sum1, numSum: numSum1 } = giveGPAs(currData[1]);
    sumToAdd += sum1;
    numSumToAdd += numSum1;
    const { sum: sum2, numSum: numSum2 } = giveGPAs(currData[2]);
    sumToAdd += sum2;
    numSumToAdd += numSum2;
  } else if (currPer === 4) {
    const { sum: sum1, numSum: numSum1 } = giveGPAs(currData[3]);
    sumToAdd += sum1;
    numSumToAdd += numSum1;
    const { sum: sum2, numSum: numSum2 } = giveGPAs(currData[4]);
    sumToAdd += sum2;
    numSumToAdd += numSum2;
  } else if (currPer === 3) {
    const { sum: sum1, numSum: numSum1 } = giveGPAs(currData[3]);
    sumToAdd += sum1;
    numSumToAdd += numSum1;
  } else {
    const { sum: sum1, numSum: numSum1 } = giveGPAs(currData[1]);
    sumToAdd += sum1;
    numSumToAdd += numSum1;
  }

  sumAllGPA += sumToAdd;
  sumNumGPA += numSumToAdd;
  const last = Math.round((sumAllGPA / sumNumGPA) * 1000) / 1000;
  return last;
}

const func = async (setCurrentData) => {
  const latestPeriod =
    typeof window !== "undefined"
      ? sessionStorage.getItem("perCurrPeriod")
      : null;
  const token = getCookie("token");
  let currData =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem(`data`))
      : null;
  const dataToSend = {
    token,
    options: { onlyGPA: true, limGPA: latestPeriod },
  };
  try {
    const res = await fetch("/api/hac/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });

    const resData = await res.json();
    if (!resData.success) {
      throw Error("Something went wrong!");
    }
    if (typeof window !== "undefined") {
      currData = { ...currData, ...resData.data };
      sessionStorage.setItem("data", JSON.stringify(currData));
      sessionStorage.setItem("trans", JSON.stringify(resData.transData));
    }
  } catch (e) {
    console.error(e);
    router.push("/error");
  }
  try {
    const val = getGPA();
    return val;
  } catch (e) {
    console.error(e);
    return "Not able to set";
  } finally {
    const data =
      typeof window !== "undefined"
        ? JSON.parse(sessionStorage.getItem("data"))
        : null;
    const per =
      typeof window !== "undefined"
        ? Number(sessionStorage.getItem("currPeriod"))
        : null;
    setCurrentData(data[per]);
  }
};

function GpaVal({ setCurrentData }) {
  const { data, isFetching } = useQuery({
    queryKey: ["gpa"],
    queryFn: () => func(setCurrentData),
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      <p className="text-6xl mt-6 bg-gradient-to-r from-blue-600 dark:via-indigo-300 via-indigo-900 dark:to-[#4A6CF7] to-[#4A6CF7] inline-block text-transparent bg-clip-text font-bold my-7">
        {isFetching ? loadingSVG : data}
      </p>
    </div>
  );
}

export default GpaVal;
