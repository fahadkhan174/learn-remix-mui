import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { useState } from "react";
import { hydrateRoot } from "react-dom/client";
import { RemixBrowser } from "remix";
import theme from "./theme";
import ClientStyleContext from "./theme/ClientStyleContext";
import createEmotionCache from "./theme/createEmotionCache";

interface ClientCacheProviderProps {
  children: React.ReactNode;
}
function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

hydrateRoot(
  document,
  <ClientCacheProvider>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <RemixBrowser />
    </ThemeProvider>
  </ClientCacheProvider>
);
