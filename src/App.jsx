import { Routes, Route } from "react-router-dom";
import "./App.scss";
import recipesData from "/foodieland-react/data/recipes.json?url";
import RecipesContext from "./context/RecipesContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/RecipesPage";
import Blog from "./pages/Blog/Blog";
import About from "./pages/AboutUs/About";
import Conacts from "./pages/Contacts/Conacts";
import NotFount from "./pages/NotFount";
import { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch(recipesData) // Эскертүү: / менен башталат
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch recipes.json. Status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setRecipes(data); // Фетч аркылуу алынган маалыматты сактоо
      })
      .catch((error) => {
        console.error("Error loading recipes:", error);
      });
  }, []);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <RecipesContext.Provider value={recipes}>
          <Routes>
            <Route path='/foodieland-react/' element={<Home />} />
            <Route path='/foodieland-react/recipes' element={<Recipes />} />
            <Route path='/foodieland-react/blog' element={<Blog />} />
            <Route path='/foodieland-react/about' element={<About />} />
            <Route path='/foodieland-react/contact' element={<Conacts />} />
            <Route path='*' element={<NotFount />} />
          </Routes>
        </RecipesContext.Provider>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
