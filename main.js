import { addPostToPage } from "./js/post.js";

function main () {

    let postButton = document.getElementById("postButton");
    postButton.addEventListener("click", () => {
    addPostToPage();
});

}

main();