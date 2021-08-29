const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data));
}
loadComments()

const displayComments = comments => {
    // for(const comment of comments){
    //     console.log(comment)
    // }
    const commentsDiv = document.getElementById('comments')

    comments.forEach(comment => {
        // console.log(comment)
        const div = document.createElement('div')
        div.classList.add('comment')
        div.innerHTML = `
        <h4>Name: ${comment.name}</h4>
        <p> Email: ${comment.email}<p>
        <button class = "btn" onclick="showDisplayDetails('${comment.id}')">Details</button>
        `;
        commentsDiv.appendChild(div)

    })
}

const showDisplayDetails = id => {

    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => res.json())
        .then(data => showDetails(data))
}


const showDetails = (details) => {
        console.log(details)
        const detailsDiv = document.getElementById('show-details')
        const div = document.createElement('div')
        div.classList.add('details')
        div.innerHTML = `

        <h4>Id: ${details.id}</h4>
        <h4>Name: ${details.name}</h4>
        <h4>Email: ${details.email}</h4>
        <p>${details.body}</p>
        `;

        detailsDiv.textContent =   ``;
        detailsDiv.appendChild(div)

}