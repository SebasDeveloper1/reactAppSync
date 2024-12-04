import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { ApolloProvider } from "@apollo/client"; // Componente que envuelve la aplicación y pasa el cliente Apollo a todos los componentes.
import client from "./apolloClient"; // Cliente Apollo.
import CreateUserPage from "./pages/CreateUserPage/CreateUserPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create-user" element={<CreateUserPage />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
