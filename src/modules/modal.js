import getshow from './getShows.js';

const modal = document.getElementById('modal-popup');
const modalTemplate = (show) => {
  modal.innerHTML = `      <li id=${show.id}>
      <div class ="closeModal">
      <button type="button" id="close">&times;</button>
      </div>
      <div class ='showList'>
  <img class="modal-img" src=${show.image.medium} alt="show Image">
  <div class ="showContent">
    <h2 class="modal-title" id="show-title">${show.name}</h2>
    <h4 class="modal-summary">${show.summary}</h4>
    </div>
    </div>

    <section id="awesome-comments"> 
    <div id="comment">
         <h2 class="refresh"> Recent Comments </h2> 
         <div id="comments-list"></div>
    </div> 
   <div id="input-form">
       <form action="#" id="add-comment-form">
           <h2>Add your Comment </h2>
           <input type="text" placeholder="Your name" name="title" required>
           <textarea name="comments" cols="30" rows="10" placeholder="your insights" required></textarea>
           <input type="submit" id="submit" value="Submit">
       </form>
   </div> 
   </section>
   </li>
  `;
};

const displayModal = async (element) => {
  const fetchedShows = await getshow();
  const shows = fetchedShows.slice(0, 24);
  modal.style.display = 'flex';
  const showId = Number(element.parentNode.id);
  shows.forEach((show) => {
    if (show.id === showId) {
      modalTemplate(show);
    }
  });
};

export { displayModal, modal };