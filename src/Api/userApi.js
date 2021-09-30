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

const swalAlertConfig = (r) => ({
  title: r,
  position: 'center',
  showConfirmButton: false,
  timer: 2000,
  background: 'red',
});

const swalErrorConfig = (e) => ({
  title: e,
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
    await Swal.fire(swalErrorConfig(e.response.data.message));
  }
};

export const signIn = async (params) => {
  try {
    const { data } = await baseInstance.post('/user/login', params);
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
  } catch (e) {
    await Swal.fire(swalErrorConfig(e.response.data.message));
  }
};

export const getAllUsers = async (page, id) => {
  try {
    const response = await baseInstance.get('/user/all', {
      params: { page, id },
    });
    return response.data;
  } catch (e) {
    await Swal.fire(swalErrorConfig(e.response.data.message));
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
  try {
    await authBaseInstance.post('/request', { to: id }).then((r) => {
      Swal.fire(swalAlertConfig(r.data.message));
    });
  } catch (e) {
    await Swal.fire(swalErrorConfig(e.response.data.message));
  }
};

export const acceptFriendsRequest = async (id) => {
  const { data } = await authBaseInstance.post('/request/accept', { id });
  await Swal.fire(swalAlertConfig(data.message));
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const getRequest = async (id) => {
  const response = await authBaseInstance.get('/request', { params: { id } });
  return response.data;
};

export const getFriends = async (friends) => {
  const response = await authBaseInstance.get('/request/friends', {
    params: { friends },
  });
  return response.data;
};

export const deleteFriends = async (id) => {
  const { data } = await authBaseInstance.delete('/request/friends', {
    params: { id },
  });
  await Swal.fire(swalAlertConfig(data.message));
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const loadShows = async () => {
  authBaseInstance.post('/shows');
};
