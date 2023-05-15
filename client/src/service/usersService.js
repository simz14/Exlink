export const fetchUsers = async () => {
  const response = await fetch("http://localhost:8080/users");
  return response.json();
};

export const createUser = async (userData) => {
  return fetch("http://localhost:8080/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};
