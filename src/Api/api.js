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

export const getPeople = async ()=>{
  return instance.get('people')
}

export const getShowsById = async (id) => {
  return instance.get(`/shows/${id}?embed=cast`);
};

export const getPeopleById = async (id) => {
  return instance.get(`/people/${id}`);
};

export const getShowsForPeopleById = async (id) => {
  return instance.get(`/people/${id}/castcredits?embed=show`);
};

export const getShowsEpisodes = async (id) => {
  return instance.get(`/shows/${id}/episodes`);
};
