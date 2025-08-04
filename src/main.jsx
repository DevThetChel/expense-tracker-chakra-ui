import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ChakraProvider, theme } from "@chakra-ui/react";
import GlobalContextProvider from "./context/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalContextProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </GlobalContextProvider>
  </StrictMode>
);
