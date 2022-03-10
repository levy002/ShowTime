import getshow from './getShows.js';

const modal = document.getElementById('modal-popup');

const displayModal = async (element) => {
  const fetchedShows = await getshow();
  const Shows = fetchedShows.slice(0, 20);
  modal.style.display = 'flex';
  const showId = element.parentNode.id;

  Shows.map((show) => {
    if (show.id === showId){
    const showInfo = document.createElement('li');
    showInfo.id = show.id;
    showInfo.innerHTML = `
  <img class="modal-img" src=${show.image.medium} alt="show Image">
    <h2 class="modal-title" id="show-title">${show.name}</h2>
    <p class="modal-summary">${show.summary}

    <section id="awesome-students"> 
    <div id="score">
         <h2 class="refresh"> Recent Comments </h2> 
         <div id="students-list"></div>
    </div> 
   <div id="input-form">
       <form action="#" id="add-student-form">
           <h2>Add your Comment </h2>
           <input type="text" placeholder="Your name" name="title" required>
           <textarea name="comments" id="" cols="30" rows="10" placeholder="Enter your comment" required></textarea>
           <input type="submit" value="Submit">
       </form>
   </div> 
   </section>
  `;
    modal.appendChild(showInfo);
    return show;
  }
  });
};


export default displayModal;