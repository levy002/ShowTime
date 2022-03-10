import { postLikes } from './likesCounter.js';

const addLike = () => {
  document.addEventListener('click', (e) => {
    const clickedElement = e.target;
    const likesCounter = clickedElement.parentNode.nextElementSibling.childNodes[1];
    const showId = Number(clickedElement.parentNode.parentNode.id);
    if (clickedElement.id === 'liked-icon') {
      postLikes(showId, likesCounter);
    }
  });
};

export default addLike;