import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import RecipeDetail from "./components/RecipeDetail";
import RecipesContainer from "./components/RecipesContainer";
import Login from "./components/Login";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<RecipesContainer />} />
        <Route path="/detail/:recipeId" element={<RecipeDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
