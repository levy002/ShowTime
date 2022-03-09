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

  Shows.map((show) => {
    const showInfo = document.createElement('li');
    showInfo.id = show.id;
    showInfo.className = 'show';
    showInfo.innerHTML = `
  <img id="show-img" src=${show.image.medium} alt="show Image">
  <div id="like-show">
    <h2 id="show-title">${show.name}</h2>
    <i class="fa fa-heart-o" id="like-icon" aria-hidden="true"></i>
  </div>
  <p id="likes">${show.likes} likes</p>
  <button type="button" id="comment-btn">Comments</button>
  `;
    allShows.appendChild(showInfo);
    return show;
  });
};

export default displayShows;