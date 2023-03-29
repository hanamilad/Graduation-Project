import "./App.css";
import Home from "./component/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginbage from "./component/login/Loginbage";
import Rej from "./component/login/Rej";
import Forgetpas from "./component/login/Forgetpas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Loginbage />} path="/log" />
        <Route element={<Rej />} path="/rej" />
        <Route element={<Forgetpas />} path="/forget" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
