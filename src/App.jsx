// import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Home/Hero";
import Categories from "./pages/Home/Categories";
import Recipes from "./pages/Home/Recipes";
import Chef from "./pages/Home/Chef";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {/* <Routes>
          <Route />
        </Routes> */}
        <Hero/>
        <Categories />
        <Recipes/>
        <Chef/>
      </main>
    </>
  );
}

export default App;
