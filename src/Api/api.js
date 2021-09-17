import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.tvmaze.com',
});

export const getAllShows = async (page = 1) => {
  return instance.get('/shows', {
    params: {
      page: page,
    },
  });
};
