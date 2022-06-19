import React, { FC } from "react";
import "./App.css";
//Redux
import { IRootState } from "./Redux/Store/Store";
import { useSelector } from "react-redux";
//Libraries
import { Navigate, Route, Routes, Outlet } from "react-router-dom";
//Components
import Header from "./Page/Header/Header";
import HomePage from "./Page/HomePage/HomePage";
import AnimePage from "./Page/AnimePage/AnimePage";

function App() {
  return (
    <div className="App">
      <div className="cursor" id="cursor"></div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime" element={<AnimePage />} />
        <Route path="/games" element={<></>} />
        <Route path="/movies" element={<></>} />
        <Route path="/tvShows" element={<></>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
