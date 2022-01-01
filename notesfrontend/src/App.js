import React from "react";
import "./App.css";
import Header from "./components/Header";
import ListPage from "./pages/ListPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotePage from "./pages/NotePage";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <div className="container root">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact element={<ListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
