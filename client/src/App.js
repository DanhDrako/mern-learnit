import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Auth from "./views/Auth";
import Dashboard from "./views/Dashboard";
import ProtectedRoute from "./routing/ProtectedRoute";
import About from "./views/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Auth authRoute="login" />} />
        <Route path="register" element={<Auth authRoute="register" />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Dashboard />} path="/dashboard" />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<About />} path="/about" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
