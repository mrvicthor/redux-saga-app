import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseInitApp from "./hooks/useInitApp";
import { Routes, Route } from "react-router-dom";
import { Home, Layout } from "./components";

function App() {
  UseInitApp();
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
