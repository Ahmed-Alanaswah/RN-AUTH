import axios from "axios";
const API_KEY = "AIzaSyBa7sX-ugn0DFp_qteKLfiZo4RTUWsZ42s";

export async function userAuthenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return userAuthenticate("signUp", email, password);
}

export function login(email, password) {
  return userAuthenticate("signInWithPassword", email, password);
}
