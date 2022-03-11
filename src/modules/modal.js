import getshow from './getShows.js';
import { getCommentsData } from './getComments.js';
import { commentTemplate } from './addComment.js';

const modal = document.getElementById('modal-popup');
const modalTemplate = async (show) => {
  modal.innerHTML = '';
  modal.id = show.id;

  const comments = await getCommentsData(show.id);

  const closeSign = document.createElement('i');
  closeSign.id = 'close';
  closeSign.className = 'fas fa-times';
  modal.appendChild(closeSign);
  modal.appendChild(closeSign);

  const showInfo = document.createElement('div');
  showInfo.className = 'showList';

  const showImg = document.createElement('img');
  showImg.className = 'modal-img';
  showImg.alt = 'Show Image';
  showImg.src = show.image.medium;
  showInfo.appendChild(showImg);

  const showDescrpt = document.createElement('div');
  showDescrpt.className = 'showContent';

  const showName = document.createElement('p');
  showName.className = 'show-title';
  showName.textContent = show.name;
  showDescrpt.appendChild(showName);

  const showSummary = document.createElement('p');
  showSummary.className = 'show-summary';
  showSummary.textContent = show.summary;
  showDescrpt.appendChild(showSummary);
  showInfo.appendChild(showDescrpt);
  modal.appendChild(showInfo);

  const allComments = document.createElement('div');
  allComments.id = 'comment-list';

  const comentsCounter = document.createElement('h5');
  allComments.appendChild(comentsCounter);
  modal.appendChild(allComments);

  const form = document.createElement('form');

  const username = document.createElement('input');
  username.type = 'text';
  username.id = 'username';
  username.placeholder = 'Enter your name';
  form.appendChild(username);

  const textArea = document.createElement('textarea');
  textArea.placeholder = 'Add your comment here';
  form.appendChild(textArea);

  const submit = document.createElement('input');
  submit.value = 'submit';
  submit.type = 'submit';
  submit.id = 'submit';
  form.appendChild(submit);
  commentTemplate(comments, allComments);
  modal.appendChild(form);

  const errorMessage = document.createElement('p');
  errorMessage.id = 'errorMessage';
  modal.appendChild(errorMessage);
};

const displayModal = async (element) => {
  const fetchedShows = await getshow();
  const shows = fetchedShows.slice(0, 24);
  modal.style.display = 'flex';
  modal.style.flexDirection = 'column';
  const showId = Number(element.parentNode.id);
  shows.forEach((show) => {
    if (show.id === showId) {
      modalTemplate(show);
    }
  });
};
export { displayModal, modal };
