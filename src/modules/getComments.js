const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = '3p7stlK4daF9Z5wTNg5X';

const getCommentsData = async (showId) => {
  let data = await fetch(`${baseUrl}${appId}/comments?item_id=${showId}`);
  data = await data.json();
  console.log(data);
  return data;
};

const postComments = async (showId, title, comments) => {
  await fetch(`${baseUrl}${appId}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: showId,
      username: title,
      comment: comments,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
};

export { postComments, getCommentsData };