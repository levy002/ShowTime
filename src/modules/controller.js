import { displayModal, modal } from './modal.js';

const openModal = () => {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'comment-btn') {
      displayModal(e.target);
    }
  });
};

const closeModal = () => {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'close') {
      modal.style.display = 'none';
    }
  });
};

export { openModal, closeModal };
