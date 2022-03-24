let inputReference = document.querySelector("input");
let buttonReference = document.querySelector("button");
let sectionReference = document.querySelector("section");

let posts;
if (localStorage.getItem("posts")) {
    posts = JSON.parse(localStorage.getItem("posts"));
    renderizaPosts(posts);
} else {
    posts = [];
}

buttonReference.addEventListener("click", event => {
    
    event.preventDefault();
    posts.unshift(inputReference.value);

    localStorage.setItem("posts", JSON.stringify(posts));
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