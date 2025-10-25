import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { lazy, Suspense, use } from "react";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const MainBranch = lazy(() => import("./components/MainBranch"));
const SubBranch = lazy(() => import("./components/SubBranch"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));
const Login = lazy(() => import("./components/Login"));

function App() {
  let base_api = import.meta.env.VITE_API;
  let app_name = import.meta.env.VITE_NAME;
  return (
    <>
      <Suspense
        fallback={
          <>
            <p>Loading....</p>
          </>
        }
      >
        <Routes>
          <Route path="" element={<ProtectedRoute />}>
            <Route path="" element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="contact" element={<Contact />}>
              <Route path="" element={<Navigate to="/contact/main-branch" />} />
              <Route path="main-branch" element={<MainBranch />} />
              <Route path=":branch" element={<SubBranch />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
