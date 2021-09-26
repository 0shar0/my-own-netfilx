import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.tvmaze.com',
});
const apiInstance = axios.create({
  baseURL: ' https://api.tvmaze.com',
});

export const getSchedule = async () => {
  return apiInstance.get('/schedule');
};

export const getShows = async (page) => {
  return baseInstance.get('/shows');
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
