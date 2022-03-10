const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = '3p7stlK4daF9Z5wTNg5X';

const getLikesData = async () => {
  let data = await fetch(`${baseUrl}${appId}/likes`);
  data = await data.json();
  return data;
};

const postLikes = async (showId, element) => {
  await fetch(`${baseUrl}${appId}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: showId,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const likesArray = await getLikesData();
  likesArray.map((a) => {
    if (a.item_id === showId) {
      element.textContent = `${a.likes}`;
    }
    return a;
  });
};

export { postLikes, getLikesData };