import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/pages/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/login" element={<Login key="login" />} /> */}
          <Route
            exact
            index
            element={<Layout key="common" page="dashboard" />}
          />
          <Route
            exact
            path="/categories"
            element={<Layout key="common" page="categories" />}
          />
        </Routes>
      </BrowserRouter>
      {/*  <Layout /> */}
    </>
  );
}

export default App;
