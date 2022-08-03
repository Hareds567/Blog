import React, { FC } from "react";
import "./App.css";
//Libraries
import { Navigate, Route, Routes, Outlet } from "react-router-dom";
//Components
import Header from "./Page/Header/Header";
import HomePage from "./Page/HomePage/HomePage";
import AnimePage from "./Page/AnimePage/AnimePage";

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  localStorage.removeItem("animeInfo");
});

function App() {
  return (
    <div className="App">
      <div className="cursor" id="cursor"></div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="anime" element={<AnimePage />}>
          <Route path="?page=" element={<AnimePage />} />
          <Route path="?letter=" element={<AnimePage />} />
          <Route path=":anime" element={<AnimePage />} />
        </Route>
        <Route path="games" element={<></>} />
        <Route path="movies" element={<></>} />
        <Route path="tvShows" element={<></>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
