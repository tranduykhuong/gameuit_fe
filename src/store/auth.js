const { localStorage } = global.window;

const auth = {
  loginSuccess(data) {
    localStorage.isSuccess = true;
    localStorage.user = data.user;
  },

  isLoginSuccess() {
    return localStorage.isSuccess;
  },

  user() {
    return localStorage.user;
  },

  logout() {
    localStorage.clear();
  },
};

export default auth;
