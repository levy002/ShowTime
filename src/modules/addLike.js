import { postLikes } from './likesCounter.js';

const addLike = () => {
  document.addEventListener('click', (e) => {
    const clickedElement = e.target;
    const likesCounter = clickedElement.parentNode.nextElementSibling.childNodes[1];
    const showId = Number(clickedElement.parentNode.parentNode.id);
    if (clickedElement.id === 'liked-icon') {
      postLikes(showId, likesCounter);
      likesCounter.textContent = (Number(likesCounter.textContent) + 1);
    }
  });
};

export default addLike;