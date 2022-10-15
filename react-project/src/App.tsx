import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './List';
import ToDo from './ToDo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDo />} />
        {/* <Route path="/list" element={<List />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
