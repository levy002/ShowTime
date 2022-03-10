import getshow from './getShows.js';
import showNumber from './showCounter.js';
import { getLikesData } from './likesCounter.js';

const allShows = document.querySelector('.allShows');
const counter = document.getElementById('shows-counter');

const showTemplate = (Shows) => {
  Shows.forEach((show) => {
    const showInfo = document.createElement('li');
    showInfo.className = 'show';
    showInfo.id = show.id;
    showInfo.innerHTML = `
  <img id="show-img" src=${show.image.medium} alt="show Image">
  <div id="like-show">
    <h2 id="show-title">${show.name}</h2>
    <i class="fas fa-heart" id="liked-icon"></i>
  </div>
  <div id="likes-counter">
  <p id="likes">${show.likes}</p>
  <p>likes</p>
  </div>
  <button type="button" id="comment-btn">Comments</button>
  `;
    allShows.appendChild(showInfo);
  });
};

const displayShows = async () => {
  const fetchedShows = await getshow();
  const Shows = fetchedShows.slice(0, 20);
  counter.textContent = `(${showNumber(Shows)})`;
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

export default displayShows;