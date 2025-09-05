import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import {ToastContainer} from 'react-toastify';
import HomePage from "./components/homepage";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
    <ToastContainer />
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </main>
  </React.Fragment>
  );
}

export default App;
