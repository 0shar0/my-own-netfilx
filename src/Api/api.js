import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.tvmaze.com',
});

export const getSchedule = async () => {
  return instance.get('/schedule');
};

export const getShows = async (page) => {
  return instance.get('/shows', { params: { page } });
};

export const getShowsById = async (id) => {
  return instance.get(`/shows/${id}`);
};
