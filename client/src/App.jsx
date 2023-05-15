import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import NewUser from "./screens/NewUser/NewUser";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/user/new" element={<NewUser />} />
    </Routes>
  );
};

export default App;
