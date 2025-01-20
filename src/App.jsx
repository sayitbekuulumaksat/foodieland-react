// import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

import Categories from "./pages/Categories";

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
        <Categories />
      </main>
    </>
  );
}

export default App;
