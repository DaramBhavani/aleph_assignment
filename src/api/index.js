import { API_USERS } from "./constant";
import axios from "axios";

const getUsers = () => {
  return axios.get(API_USERS);
};

export default getUsers;
