import displayShows from './displayShow.js';

const shows = [];
const showId = [
  200, 201, 78, 87, 67, 300, 123, 878, 96, 3458, 130, 654, 1, 789, 35, 5679, 456, 7890, 44, 100];
const url = 'https://api.tvmaze.com/shows/';

const getshow = showId.map(async (id) => {
  let data = await fetch(`${url}${id}`);
  data = await data.json();
  const show = {
    name: data.name,
    preview: data.summary,
    image: data.image.original,
    id: data.id,
  };
  shows.push(show);
  displayShows(shows);
  return shows;
});

export default getshow;