import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import App from './App.jsx';
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer";
import { App } from "./App.jsx";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Header />
        <App />
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
