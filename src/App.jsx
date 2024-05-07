import React from "react";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
