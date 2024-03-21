"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { hasCookie, setCookie } from "cookies-next";
import { encCreds } from "../actions.js/encCreds";
import { useMutation } from "@tanstack/react-query";
import { globalContext } from "../providers";
import toast from "react-hot-toast";

function Form() {
  const [error, setError] = useState(null);
  const [btnText, setBtnText] = useState("Sign in");
  const router = useRouter();
  const { updateChangeTheHeader } = useContext(globalContext);
  useEffect(() => {
    if (hasCookie("token")) {
      router.push("/dashboard");
    }
  }, [router]);

  async function handleQuery({ username, password, isChecked }) {
    const options = { onlyPeriod: false, periodNumNeeded: null };
    setBtnText(
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
    const preToken = username + " % " + password;
    const token = await encCreds(preToken);
    const dataToSend = { token, options };
    const res = await fetch("/api/hac/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });
    try {
      let data = await res.json();
      if (!data.success) {
        if (data.wrongPas) {
          setError("The username and password does not match!");
          setBtnText("Sign in");
          return;
        } else {
          setError(
            "There was a error while processing your request! Please try again later."
          );
          setBtnText("Sign in");
          return;
        }
      } else {
        if (isChecked) {
          const d = new Date();
          d.setDate(d.getDate() + 15);
          setCookie("token", token, {
            secure: true,
            sameSite: true,
            expires: d,
          });
        } else {
          setCookie("token", token, {
            secure: true,
            sameSite: true,
          });
        }
        if (typeof window !== "undefined" && window.sessionStorage) {
          const perNum = data.periodNumber;
          const dataToStore = {};
          data.id = username;
          dataToStore[`${perNum}`] = data;
          sessionStorage.setItem(`data`, JSON.stringify(dataToStore));
          sessionStorage.setItem("currPeriod", perNum);
          sessionStorage.setItem("perCurrPeriod", perNum);
        }
        setBtnText("Sign in");
        updateChangeTheHeader(true);
        router.push("/dashboard");
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
      setError(
        "There was a error while processing your request! Please try again later."
      );
      setBtnText("Sign in");
      return;
    }
  }

  const mutation = useMutation({
    mutationKey: "initialData",
    mutationFn: handleQuery,
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.username.value === "" || e.target.password.value === "") {
      setError("Please enter a vaild input!");
      return;
    }
    if (error) {
      setError(null);
    }

    mutation.mutate({
      username: e.target.username.value,
      password: e.target.password.value,
      isChecked: e.target.checkboxLabel.checked,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-8">
        <label
          htmlFor="username"
          className="mb-3 block text-sm text-dark dark:text-white"
        >
          Your Username
        </label>
        <input
          type="text"
          name="username"
          placeholder="Enter your Username"
          className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          disabled={btnText !== "Sign in"}
        />
      </div>
      <div className="mb-8">
        <label
          htmlFor="password"
          className="mb-3 block text-sm text-dark dark:text-white"
        >
          Your Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          disabled={btnText !== "Sign in"}
        />
      </div>
      <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
        <div className="mb-4 sm:mb-0">
          <label
            htmlFor="checkboxLabel"
            className="flex cursor-pointer select-none items-center text-sm font-medium text-body-color"
          >
            <div className="relative">
              <input type="checkbox" id="checkboxLabel" className="sr-only" />
              <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                <span className="opacity-0">
                  <svg
                    width="11"
                    height="8"
                    viewBox="0 0 11 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                      strokeWidth="0.4"
                    />
                  </svg>
                </span>
              </div>
            </div>
            Keep me signed in
          </label>
        </div>
      </div>
      {error ? <p className=" text-red-500 text-center my-4">{error}</p> : null}
      <div className="mb-6">
        <button
          className="disabled:bg-gray-600 flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
          disabled={btnText !== "Sign in"}
        >
          {btnText}
        </button>
      </div>
    </form>
  );
}

export default Form;
