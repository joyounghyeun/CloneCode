import React, { useState } from "react";
import { Router } from "react-router-dom";
import AppRouter from "./Router";

import Appfirebase from "../Appfirebase";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <AppRouter isLogin={isLogin} />
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;
