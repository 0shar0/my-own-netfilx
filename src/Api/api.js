import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.tvmaze.com',
});

export const getSchedule = async () => {
  return instance.get('/schedule');
};

export const getShows = async () => {
  return instance.get('/shows');
};
