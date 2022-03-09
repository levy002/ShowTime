import { getLikesData } from './likesCounter.js';

const displayLikes = async (elem) => {
  const showId = Number(elem.parentNode.id);
  const likesArray = await getLikesData();
  likesArray.map((a) => {
    if (a.item_id === showId) {
      elem.innerHTML = `${a.likes} likes`;
    }
    return a;
  });
};

export default displayLikes;