import { postComments, getCommentsData } from './getComments.js';
import commentTemplate from './addComment.js';

const commentTemplate = (data, container) => {
    data.forEach((item => {
        const comment = document.createElement('div');
        comment.innerHTML = `
        <p>${item.creation_date}</p> 
        <p> ${item.username} </p>
        <p> ${item.comment} </p>
        `
        container.appendChild(comment);
    }));
}

const addComment = () => {
document.addEventListener('click', async (e) => {
    e.preventDefault();
    const commentContainer = e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[3];
    const comments = e.target.previousElementSibling;
    const title = e.target.parentNode.childNodes[3];
    const showId = Number(e.target.parentNode.parentNode.parentNode.parentNode.id);
    if (e.target.id === 'submit') {
        await postComments(showId, title.value, comments.value);
        const commentsData = await getCommentsData(showId);
        commentTemplate(commentsData, commentContainer);
    }
});
}

export default addComment;


