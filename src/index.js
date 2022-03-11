import { openModal, closeModal } from './modules/controller.js';
import displayShows from './modules/displayShow.js';
import addLike from './modules/addLike.js';
import './styles.css';
import { postComments, getCommentsData } from './modules/getComments.js';
import commentTemplate from './modules/addComment.js';


displayShows();
openModal();
closeModal();
addLike();


document.addEventListener('click', async (e) => {
    e.preventDefault();
    const commentContainer = e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[3];
    const comments = e.target.previousElementSibling;
    const title = e.target.parentNode.childNodes[3];
    const showId = Number(e.target.parentNode.parentNode.parentNode.parentNode.id);
    if (e.target.id === 'submit') {
     await postComments(showId, title.value, comments.value );
     const commentsData = await getCommentsData(showId);
     commentTemplate(commentsData, commentContainer);
     console.log (commentsData);
     console.log(comments.value);
     console.log(title.value);
     console.log(showId);
    console.log(commentContainer);
    }
  });