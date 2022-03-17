import { postLikes } from './likesCounter.js';

const addLike = () => {
  document.addEventListener('click', (e) => {
    const clickedElement = e.target;
    const likesCounter = clickedElement.parentNode.nextElementSibling.childNodes[1];
    const showId = Number(clickedElement.parentNode.parentNode.id);
    if (clickedElement.id === 'liked-icon') {
      postLikes(showId, likesCounter);
      clickedElement.className = 'fas fa-heart animate__animated animate__heartBeat';
      setTimeout(() => {
        clickedElement.className = 'fas fa-heart';
      }, 3000);
    }
  });
};

export default addLike;