import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditProfile from "pages/EditProfile";
import Profile from "pages/Profile";
import Auth from "pages/Auth";
import Home from "pages/Home";
import Header from "pages/Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/EditProfile" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
