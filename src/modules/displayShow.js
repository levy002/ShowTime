const allShows = document.querySelector('.allShows');

const displayShows = (data) => {
  allShows.replaceChildren();
  data.map((show) => {
    const showInfo = document.createElement('li');
    showInfo.id = show.id;
    showInfo.className = 'show';

    const showImg = document.createElement('img');
    showImg.id = 'show-img';
    showImg.src = show.image;
    showImg.alt = 'show Image';
    showInfo.appendChild(showImg);

    const likeshow = document.createElement('div');
    likeshow.id = 'like-show';

    const showTitle = document.createElement('h5');
    showTitle.id = 'show-title';
    showTitle.textContent = show.name;
    likeshow.appendChild(showTitle);

    const likeIcon = document.createElement('i');
    likeIcon.className = 'fa fa-heart-o';
    likeIcon.id = 'like-icon';
    likeIcon.ariaHidden = 'true';
    likeshow.appendChild(likeIcon);

    showInfo.appendChild(likeshow);

    const allLikes = document.createElement('p');
    allLikes.id = 'likes';
    allLikes.textContent = '0 likes';
    showInfo.appendChild(allLikes);

    const commentButton = document.createElement('button');
    commentButton.type = 'button';
    commentButton.id = 'comment-btn';
    commentButton.textContent = 'Comments';
    showInfo.appendChild(commentButton);

    allShows.appendChild(showInfo);
    return show;
  });
};

export default displayShows;