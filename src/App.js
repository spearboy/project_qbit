import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Yih from "./pages/Yih";
import Ksy from "./pages/Ksy";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yih" element={<Yih />} />
          <Route path="/ksy" element={<Ksy />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
