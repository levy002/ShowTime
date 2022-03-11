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

export default commentTemplate;