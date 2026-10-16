import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// GitHub Pages serves 404.html (a copy of index.html) for unknown paths; it keeps the address, so routes still work.
// basename follows the deploy base ("/" on Vercel, "/<dépôt>/" on GitHub Pages).
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
