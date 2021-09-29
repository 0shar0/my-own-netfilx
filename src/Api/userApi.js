import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

const baseInstance = axios.create({
  baseURL: 'https://my-own-netflix-back.herokuapp.com/api',
});
const authBaseInstance = axios.create({
  baseURL: 'https://my-own-netflix-back.herokuapp.com/api',
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

authBaseInstance.interceptors.request.use(authInterceptor);

const swalConfig = (e) => ({
  title: e.response.data.message,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 2000,
  background: 'red',
});

export const registration = async (params) => {
  try {
    const { data } = await baseInstance.post('/user/register', params);
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
  } catch (e) {
    await Swal.fire(swalConfig(e));
  }
};

export const signIn = async (params) => {
  try {
    const { data } = await baseInstance.post('/user/login', params);
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
  } catch (e) {
    await Swal.fire(swalConfig(e));
  }
};

export const getAllUsers = async () => {
  try {
    const response = await baseInstance.get('/user/all');
    return response.data;
  } catch (e) {
    await Swal.fire(swalConfig(e));
  }
};

export const chek = async () => {
  const { data } = await authBaseInstance.get('/user/auth');
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const putLike = async (userData) => {
  const { data } = await authBaseInstance.put('/user', userData);
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const friendsRequest = async (id) => {
  authBaseInstance
    .post('/request', { to: id })
    .then((r) => {
      Swal.fire({
        title: r.data.message,
        position: 'center',
        showConfirmButton: false,
        timer: 2000,
        background: 'red',
      });
    })
    .catch((e) => {
      Swal.fire({
        title: e.response.data.message,
        position: 'center',
        showConfirmButton: false,
        timer: 2000,
        background: 'red',
      });
    });
};
export const getRequest = async (id) => {
  const response = await authBaseInstance.get('/request', { params: { id } });
  return response.data;
};
