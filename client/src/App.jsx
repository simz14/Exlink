import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import NewUser from "./screens/NewUser/NewUser";
import UserDetail from "./screens/UserDetail/UserDetail";
import Login from "./screens/Login/Login";
import { PrivateRoute } from "./components/PrivateRoute";

const App = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/user/new"
        element={
          <PrivateRoute>
            <NewUser />{" "}
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/user/:id"
        element={
          <PrivateRoute>
            <UserDetail />
          </PrivateRoute>
        }
      />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
