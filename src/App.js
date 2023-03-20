import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route 
} from "react-router-dom";

//layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

//pages
import About from "./pages/About";
import Home from "./pages/Home";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout/>}>
         <Route path="faq" element={<Faq/>}/>
         <Route path="contact" element={<Contact/>}/>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
