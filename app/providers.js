"use client";

import { ThemeProvider } from "next-themes";
import { QueryClient } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

export const globalContext = createContext({
  gpaTimeChanged: null,
  updateGpaTimeChanged: function () {},
  changeTheHeader: false,
  updateChangeTheHeader: function () {},
});

export function Providers({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24, // 24 hours
          },
        },
      })
  );

  let persister = null;

  if (typeof window !== "undefined")
    persister = createSyncStoragePersister({
      storage: window.sessionStorage,
    });

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
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{ persister }}
        >
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster />
        </PersistQueryClientProvider>
      </ThemeProvider>
    </globalContext.Provider>
  );
}
