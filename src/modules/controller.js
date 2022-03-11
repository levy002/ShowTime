import { displayModal, modal } from './modal.js';
import { allShows } from './displayShow.js';

const header = document.querySelector('header');
const footer = document.querySelector('footer');

const openModal = () => {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'comment-btn') {
      displayModal(e.target);
      header.style.display = 'none';
      allShows.style.display = 'none';
      footer.style.display = 'none';
    }
  });
};

const closeModal = () => {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'close') {
      modal.style.display = 'none';
      header.style.display = 'flex';
      allShows.style.display = 'flex';
      footer.style.display = 'flex';
    }
  });
};

export { openModal, closeModal };
