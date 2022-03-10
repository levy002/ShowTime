import displayShows from './modules/displayShow.js';
import displayModal from './modules/modal.js';

import './styles.css';

displayShows();
 

// function Modal(comment) {
document.addEventListener('click', async (e) => {
         if(e.target.id === 'comment-btn') {
         displayModal(e.target);
        }
    console.log(e.target.parentNode.id);
  }); 
//}
