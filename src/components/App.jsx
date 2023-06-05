import { CssBaseline } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Actors, MovieInformation, Movies, NavBar, Profile } from "./";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/" element={<Movies />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
