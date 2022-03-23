let inputReference = document.querySelector("input");
let buttonReference = document.querySelector("button");
let sectionReference = document.querySelector("section");
let posts = [];

buttonReference.addEventListener("click", event => {
    
    event.preventDefault();
    posts.unshift(inputReference.value);

    renderizaPosts(posts);

})

function renderizaPosts(posts) {

    sectionReference.innerHTML = "";

    for (post of posts) {

        sectionReference.innerHTML += 
        `
        <div><p>${post}</p></div>
        `;

    } 

}