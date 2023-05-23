import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Signup from "../pages/Signup/Signup";
import Signin from "../pages/Signin/Signin";
import Profile from "../pages/Profile/Profile";
import Lessons from "../pages/Lessons/Lessons";
import Lesson from "../pages/Lesson/Lesson";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/lessons/lesson/:id" element={<Lesson />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
