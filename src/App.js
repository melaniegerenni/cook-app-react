import React from "react";
import RecipesList from "./components/RecipesList";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<RecipesList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
