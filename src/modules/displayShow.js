const allShows = document.querySelector('.allShows');

const displayShows = (show) => {
  const showInfo = document.createElement('li');
  showInfo.id = show.id;
  showInfo.className = 'show';
  showInfo.innerHTML = `
  <img id="show-img" src=${show.image} alt="show Image">
  <div id="like-show">
    <h2 id="show-title">${show.name}</h2>
    <i class="fa fa-heart-o" id="like-icon" aria-hidden="true"></i>
  </div>
  <p id="likes">${show.likes} likes</p>
  <button type="button" id="comment-btn">Comments</button>
  `;
  allShows.appendChild(showInfo);
};

export default displayShows;