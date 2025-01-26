import { Routes, Route } from "react-router-dom";
import "./App.scss";
import recipesData from "./data/recipes.json";
import RecipesContext from "./context/RecipesContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/RecipesPage";
import Blog from "./pages/Blog/Blog";


function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <RecipesContext.Provider value={recipesData}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="recipes" element= {<Recipes/>}/>
            <Route path="blog" element= {<Blog/>}/>
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
