import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import MainBranch from "./components/MainBranch";
import SubBranch from "./components/SubBranch";

function App() {
  return (
    <>
      <header>
        <ul className="menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About-Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="" element={<Navigate to="/contact/main-branch" />} />
          <Route path="main-branch" element={<MainBranch />} />
          <Route path=":branch" element={<SubBranch />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
