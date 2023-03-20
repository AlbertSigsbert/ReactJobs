import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

//components


//pages
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <header className="mx-[6%] py-4">
        <nav className="flex gap-4 justify-end">
          <Link className="mr-auto text-2xl font-bold" to="/">ReactJobs</Link>
          <NavLink className={({isActive}) => isActive ? 'underline': ''} to="/">Home</NavLink>
          <NavLink className={({isActive}) => isActive ? 'underline': ''} to="about">About</NavLink>
        </nav>
      </header>
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
