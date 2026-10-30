import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Activities from "./pages/activities";
import Registration from "./pages/registration";
import Sponsorship from "./pages/Sponsorship";
import Test from "./pages/test";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
