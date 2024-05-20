import Loader from "@/components/ui/Loader";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";

function Table({ transPerGradeData, transPerGradeData2 }) {
  return (
    <div className=" w-full overflow-x-auto">
      <div className="dark:bg-slate-800 bg-slate-200 items-center justify-center my-10 p-4 py-10 flex flex-col gap-5 min-w-[1070px] flex-shrink-1">
        <div className="flex items-center justify-center text-center gap-4">
          <div className="flex items-center justify-center gap-2">
            <span className="underline underline-offset-4 font-bold">
              Year:{" "}
            </span>
            <span>{transPerGradeData[0][1]}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="underline underline-offset-4 font-bold">
              Grade:{" "}
            </span>
            <span>{Number(transPerGradeData[0][5])}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="underline underline-offset-4 font-bold">
              Building:{" "}
            </span>
            <span>{transPerGradeData[1][1]}</span>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-x-6 gap-y-3">
          {transPerGradeData2.map((e, i) => (
            <Fragment key={i}>
              {e.map((z, j) => (
                <span key={j}>{z} </span>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function TableRank({ data }) {
  return (
    <div className="dark:bg-slate-800 bg-slate-200 flex items-center justify-center">
      <div className="inline-block mx-auto">
        <div className="grid grid-cols-2 p-4 py-10 gap-3 mx-auto justify-items-center items-center text-xl text-center gap-y-5 md:grid-cols-3 md:gap-y-3">
          <span className="underline underline-offset-4 font-bold">
            {data[0][0]}
          </span>
          <span className="underline underline-offset-4 font-bold">
            {data[0][1]}
          </span>
          <span className="underline underline-offset-4 font-bold col-span-2 row-start-4 md:col-span-1 md:row-start-auto">
            {data[0][2]}
          </span>
          <span>{data[1][0]}</span>
          <span>{data[1][1]}</span>
          <span className="col-span-2 row-start-5 md:col-span-1 md:row-start-auto">
            {data[1][2] === "" ? "-" : data[1][2]}
          </span>
          <span>{data[2][0]}</span>
          <span>{data[2][1]}</span>
        </div>
      </div>
    </div>
  );
}

function Transcript() {
  const [mainData, setMainData] = useState("loading");

  const { isFetching } = useQuery({
    queryKey: ["gpa"],
    queryFn: () => func(setCurrentData),
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window !== undefined) {
      if (!sessionStorage.getItem("trans")) return;
      else {
        setMainData(JSON.parse(sessionStorage.getItem("trans")));
      }
    }
  }, [isFetching]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {mainData === "loading" ? (
        <Loader />
      ) : (
        <div className="container">
          {Object.keys(mainData).map((e) => {
            if (e === "transPerRankData") {
              return <TableRank data={mainData[e]} key={e} />;
            } else {
              return (
                <Table
                  transPerGradeData={mainData[e].transPerGradeData}
                  transPerGradeData2={mainData[e].transPerGradeData2}
                  key={e}
                />
              );
            }
          })}
        </div>
      )}
    </motion.div>
  );
}

export default Transcript;
