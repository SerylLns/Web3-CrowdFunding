import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import "./styles/globals.css";
import { BrowserRouter, Router } from "react-router-dom";
import { StateContextProvider } from "./context";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={Sepolia}>
      <BrowserRouter>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </BrowserRouter>
    </ThirdwebProvider>
  </React.StrictMode>
);
