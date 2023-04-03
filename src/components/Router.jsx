import React, { useState } from "react";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

function AppRouter() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <>
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
