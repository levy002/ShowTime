import getshow from './getShows.js';
import { getLikesData } from './likesCounter.js';

const allShows = document.querySelector('.allShows');

const displayShows = async () => {
  const fetchedShows = await getshow();
  const Shows = fetchedShows.slice(0, 20);

  const likesArray = await getLikesData();
  likesArray.map((a) => {
    Shows.map((show) => {
      if (a.item_id === show.id) {
        show.likes = a.likes;
      } else if (show.likes === undefined) {
        show.likes = 0;
      }
      return show;
    });
    return a;
  });

  Shows.forEach((show) => {
    const showInfo = document.createElement('li');
    showInfo.id = show.id;
    showInfo.className = 'show';
    showInfo.innerHTML = `
  <img id="show-img" src=${show.image.medium} alt="show Image">
  <div id="like-show">
    <h2 id="show-title">${show.name}</h2>
    <i class="fas fa-heart" id='liked-icon'></i>
  </div>
  <div id="likes">
  <p>${show.likes}</p><span>likes</span>
  </div>
  <button type="button" id="comment-btn">Comments</button>
  `;
    allShows.appendChild(showInfo);
  });
};

export default displayShows;