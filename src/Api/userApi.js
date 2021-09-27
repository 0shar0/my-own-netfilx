import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

const baseInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  /*'https://my-own-netflix-back.herokuapp.com/api',*/
});
const authBaseInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  /*'https://my-own-netflix-back.herokuapp.com/api',*/
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

authBaseInstance.interceptors.request.use(authInterceptor);

export const registration = async (params) => {
  try {
    const { data } = await baseInstance.post('/user/register', params);
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
  } catch (e) {
    await Swal.fire({
      title: e.response.data.message,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 2000,
      background: 'red',
    });
  }
};

export const signIn = async (params) => {
  try {
    const { data } = await baseInstance.post('/user/login', params);
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
  } catch (e) {
    await Swal.fire({
      title: e.response.data.message,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 2000,
      background: 'red',
    });
  }
};

export const chek = async () => {
  try {
    const { data } = await authBaseInstance.get('/user/auth');
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
  } catch (e) {
    await Swal.fire({
      title: e.response.data.message,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 2000,
      background: 'red',
    });
  }
};
