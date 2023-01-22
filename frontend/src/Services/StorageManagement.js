const saveUserInfo = (id, token, user) => {
    localStorage.setItem("id", id);
    localStorage.setItem("user", user);
    localStorage.setItem("token", token);
    localStorage.setItem("logged", true);
  };