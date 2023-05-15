export const fetchUsers = async () => {
  const response = await fetch("http://localhost:8080/users");
  return response.json();
};

export const createUser = async (userData) => {
  return fetch("http://localhost:8080/user", {
    method: "POST",
    body: userData,
  });
};
