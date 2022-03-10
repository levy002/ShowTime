import getshow from './getShows.js';

const allShows = document.querySelector('.allShows');

const showTemplate = (Shows) => {
  Shows.forEach((show) => {
    const showInfo = document.createElement('li');
    showInfo.className = 'show';
    showInfo.id = show.id;
    showInfo.innerHTML = `
  <img id="show-img" src=${show.image.medium} alt="show Image">
  <div id="like-show">
    <h2 id="show-title">${show.name}</h2>
    <i class="far fa-heart" id="like-icon"></i>
  </div>
  <p id="likes">0 likes</p>
  <button type="button" id="comment-btn">Comments</button>
  `;
    allShows.appendChild(showInfo);
  });
};

const displayShows = async () => {
  const fetchedShows = await getshow();
  const Shows = fetchedShows.slice(0, 20);
  showTemplate(Shows);
};

export default displayShows;