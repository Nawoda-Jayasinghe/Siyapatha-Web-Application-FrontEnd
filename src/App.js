import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import AppBar from "./Components/AppBar/AppBar";
import DonateNow from "./Pages/DonateNow/DonateNow";
import JoinUs from "./Pages/JoinUs/JoinUs";




function App() {
  return (
    <>
      <AppBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donatenow" element={<DonateNow/>}></Route>
        <Route path="/joinus" element={<JoinUs/>}></Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
