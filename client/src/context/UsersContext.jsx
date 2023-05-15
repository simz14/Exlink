import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { fetchUsers } from "../service/usersService";

export const UsersContext = createContext({
  users: [],
  setUsers: () => {},
  error: "",
  setError: () => {},
  loading: false,
  setLoading: () => {},
});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const setData = async () => {
    try {
      setLoading(true);
      const usersData = await fetchUsers();
      setUsers(usersData);
      setLoading(false);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <UsersContext.Provider
      value={{ users, setUsers, error, setError, loading, setLoading }}
    >
      {children}
    </UsersContext.Provider>
  );
};
UsersProvider.propTypes = {
  children: PropTypes.node,
};
