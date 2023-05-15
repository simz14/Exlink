import { useEffect, useState } from "react";
import useUsers from "./useUsers";

const useUser = (id) => {
  const { users } = useUsers();
  const [user, setUser] = useState();

  useEffect(() => {
    if (users) {
      setUser(users.find((user) => user.id == id));
    }
  }, [users]);

  return { user };
};

export default useUser;
