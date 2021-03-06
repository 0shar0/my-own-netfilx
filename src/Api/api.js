import axios from 'axios';

const baseInstance = axios.create({
  baseURL: 'https://my-own-netflix-back.herokuapp.com/api',
});
const apiInstance = axios.create({
  baseURL: ' https://api.tvmaze.com',
});

export const getSchedule = async () => {
  return apiInstance.get('/schedule');
};

export const getShows = async (params) => {
  return baseInstance.get('/shows', { params });
};

export const getPeople = async (page) => {
  return apiInstance.get('/people', { params: { page } });
};

export const getShowsById = async (id) => {
  return apiInstance.get(`/shows/${id}?embed=cast`, { params: { id } });
};

export const getPeopleById = async (id) => {
  return apiInstance.get(`/people/${id}`, { params: { id } });
};

export const getShowsForPeopleById = async (id) => {
  return apiInstance.get(`/people/${id}/castcredits?embed=show`);
};

export const getShowsEpisodes = async (id) => {
  return apiInstance.get(`/shows/${id}/episodes`);
};

export const getShowsSearch = async (query) => {
  return apiInstance.get(`https://api.tvmaze.com/search/shows?q=${query}`);
};

export const getPeopleSearch = async (query) => {
  return apiInstance.get(`https://api.tvmaze.com/search/people?q=${query}`);
};
