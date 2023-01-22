const saveUserInfo = (id, token, user) => {
  localStorage.setItem("id", id);
  localStorage.setItem("user", user);
  localStorage.setItem("token", token);
  localStorage.setItem("logged", true);
};

export const isLogged = () => {
  return localStorage.getItem("logged");
};

export const getUserInfo = () => {
  return {
    id: localStorage.getItem("id"),
    user: localStorage.getItem("user"),
  };
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const logout = () => {
  localStorage.clear();
};
