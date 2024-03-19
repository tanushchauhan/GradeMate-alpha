"use client";

import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

export const globalContext = createContext({
  gpaTimeChanged: null,
  updateGpaTimeChanged: function () {},
  changeTheHeader: false,
  updateChangeTheHeader: function () {},
});

export function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  const [gpaTimeChanged, setGpaTimeChanged] = useState(0);
  const [changeTheHeader, setChangeTheHeader] = useState(false);
  function updateGpaTimeChanged(newGpaTimeChanged) {
    setGpaTimeChanged(newGpaTimeChanged);
  }
  function updateChangeTheHeader(newVal) {
    setChangeTheHeader(newVal);
  }
  return (
    <globalContext.Provider
      value={{
        gpaTimeChanged,
        updateGpaTimeChanged,
        changeTheHeader,
        updateChangeTheHeader,
      }}
    >
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster />
        </QueryClientProvider>
      </ThemeProvider>
    </globalContext.Provider>
  );
}
