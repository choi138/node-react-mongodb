import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Write from "./component/write/Write";
import Header from "./header/Header";
import Details from "./route/Details";
import Home from "./route/Home";
import ToDo from './route/List';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/list" element={<ToDo />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
