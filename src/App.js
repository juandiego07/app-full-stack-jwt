import "./style.css";
import { Fragment } from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { Dashbord } from "./components/Dashbord";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="main">
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/dashboard" element={<Dashbord></Dashbord>}></Route>
        </Routes>          
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
