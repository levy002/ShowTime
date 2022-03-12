import { openModal, closeModal } from './modules/controller.js';
import { displayShows } from './modules/displayShow.js';
import addLike from './modules/addLike.js';
import './styles.css';
import 'animate.css';
import 'hover.css';
import { addComment } from './modules/addComment.js';

addComment();
displayShows();
openModal();
closeModal();
addLike();
