import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
