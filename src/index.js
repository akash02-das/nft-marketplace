import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);

reportWebVitals();
