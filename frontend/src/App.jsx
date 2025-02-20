import React from "react";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Home from "./pages/home/home";
import "./index.css"; 

const App = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Home/>
    </div>
  );
};

export default App;
