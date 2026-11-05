import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./components/homepage";
import Beyond from "./components/beyond";
import AllSongs from "./components/allsongs";
import SongPage from "./components/songpage";
import "./App.css";

// HashRouter keeps deep links working on GitHub Pages (no server-side rewrites there).
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="beyond-engineering" element={<Beyond />} />
          <Route path="beyond-engineering/songs" element={<AllSongs />} />
          <Route path="beyond-engineering/:slug" element={<SongPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
