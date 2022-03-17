import getshow from './getShows.js';
import showsNumber from './showCounter.js';
import { getLikesData } from './likesCounter.js';

const allShows = document.querySelector('.allShows');
allShows.className = 'allShows animate__animated animate__slideInLeft';
const counter = document.getElementById('shows-counter');

const showTemplate = (Shows) => {
  Shows.forEach((show) => {
    const showInfo = document.createElement('li');
    showInfo.className = 'show hvr-grow';
    showInfo.id = show.id;
    showInfo.innerHTML = `
  <img id="show-img" src=${show.image.medium} alt="show Image">
  <div id="like-show">
    <h2 id="show-title">${show.name}</h2>
    <i class="far fa-heart hvr-pulse" id="liked-icon"></i>
  </div>
  <div id="likes-counter">
  <p id="likes">${show.likes}</p>
  <p>likes</p>
  </div>
  <button type="button" id="comment-btn" class="hvr-pulse">Comments</button>
  `;
    allShows.appendChild(showInfo);
  });
};

const displayShows = async () => {
  const fetchedShows = await getshow();
  const Shows = fetchedShows.slice(120, 150);
  counter.textContent = `(${showsNumber(Shows)})`;

  const likesArray = await getLikesData();
  likesArray.forEach((a) => {
    Shows.forEach((show) => {
      if (a.item_id === show.id) {
        show.likes = a.likes;
      } else if (show.likes === undefined) {
        show.likes = 0;
      }
    });
  });

  showTemplate(Shows);
};

export { displayShows, allShows };