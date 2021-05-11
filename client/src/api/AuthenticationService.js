import axios from "axios";

class AuthenticationService {
  signin = (email, password) => {
      return axios.post("http://localhost:8080/api/users/login", {'email':email , 'password':password})
        .then(response => {
          if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
            console.log(response.data);
          }
          return response.data;
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
  }

  signOut() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthenticationService();