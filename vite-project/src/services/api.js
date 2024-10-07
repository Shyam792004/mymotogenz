import axios from "axios";
const baseURL = "http://localhost:7036/api";
const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API

const SignUp = (name, email, password, phoneNo) =>
  axios.post(`${baseURL}/v1/auth/register`, {
    name,
    email,
    password,
    phoneNo,
  });

const Login = (email, password) =>
  axios.post(`${baseURL}/v1/auth/authenticate`, {
    email,
    password,
  });

const WebDatax = () => axios.get(`${baseURL}/web/sitex`);
const UserData = (email) => axiosInstance.get(`/users/email/${email}`);
const UpdateUserByID = (id, data) =>
  axiosInstance.put(`/users/update/${id}`, data);
const DeleteUserByID = (id) => axiosInstance.delete(`/users/delete/${id}`);

// Admin
const getAllUsers = () => axiosInstance.get("/users/all");
const CreateUser = (name, email, role, phone, address, password) =>
  axiosInstance.post("/user/add", {
    name,
    email,
    phone,
    role,
    address,
    password,
  });

export {
  axiosInstance,
  SignUp,
  Login,
  WebDatax,
  UserData,
  UpdateUserByID,
  getAllUsers,
  DeleteUserByID,
  CreateUser,
};
