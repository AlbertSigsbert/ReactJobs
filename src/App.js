import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar";

//pages
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="mx-[6%]">
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
