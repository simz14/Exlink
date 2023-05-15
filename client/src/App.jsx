import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import NewUser from "./screens/NewUser/NewUser";
import UserDetail from "./screens/UserDetail/UserDetail";
import Login from "./screens/Login/Login";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/user/new" element={<NewUser />} />
      <Route exact path="/user/:id" element={<UserDetail />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
