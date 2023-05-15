import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import NewUser from "./screens/NewUser/NewUser";
import UserDetail from "./screens/UserDetail/UserDetail";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/user/new" element={<NewUser />} />
      <Route exact path="/user/:id" element={<UserDetail />} />
    </Routes>
  );
};

export default App;
