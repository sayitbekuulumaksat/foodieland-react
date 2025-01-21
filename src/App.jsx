// import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Home/Hero";
import Categories from "./pages/Home/Categories";
import Recipes from "./pages/Home/Recipes";
import Chef from "./pages/Home/Chef";
import CheckOutInstagram from "./pages/Home/CheckOutInstagram";
import Delicious from "./pages/Home/delicious";
import Inbox from "./pages/Home/Inbox";
import Footer from "./components/Footer/Footer";

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
        <CheckOutInstagram/>
        <Delicious/>
        <Inbox/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
