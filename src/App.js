import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./components/layout/AuthLayout/ProtectedRoute";
import { PublicRoute } from "./components/layout/AuthLayout/PublicRoute";
import Home from "./components/pages/home";
import Start from "./components/pages/start";
import Success from "./components/pages/success";

function App() {
  const tokenVerify = useSelector(
    (state) => state?.falconePersistReducer?.isTokenAvailable
  );
  return (
    <Routes>
      <Route element={<PublicRoute token={tokenVerify} />}>
        <Route path="" element={<Start />} />
      </Route>
      <Route element={<ProtectedRoute token={tokenVerify} />}>
        <Route path="home" element={<Home />} />
        <Route path="success/:time/:planet" element={<Success />} />
      </Route>
    </Routes>
  );
}

export default App;
