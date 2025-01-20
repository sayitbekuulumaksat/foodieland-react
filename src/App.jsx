// import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Home/Hero";
import Categories from "./pages/Home/Categories";

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
      </main>
    </>
  );
}

export default App;
