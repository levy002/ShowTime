const counter = document.getElementById('shows-counter');

const showsNumber = (showList) => {
  const totalShows = showList.length;
  counter.textContent = `(${totalShows})`;
  return totalShows;
};

export default showsNumber;