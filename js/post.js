import { writeReply } from "./reply.js";

export function addPostToPage() {
    let postTitle = document.getElementById("titleInput");
    let postContent = document.getElementById("contentInput");
    let postList = document.getElementById("posts");

    let postContainer = document.createElement("div");
    postContainer.classList.add("post");

    let title = postTitle.value.trim();

    let titleItem = document.createElement("h3");
    titleItem.textContent = title;
    

    let content = postContent.value.substring(0, 57).trim();
    let contentItem = document.createElement("p");
    contentItem.id = "content";
    contentItem.textContent = content;
    

    let replyButton = document.createElement("button");
    replyButton.classList.add("replyButton");
    replyButton.textContent = "Reply";

    replyButton.addEventListener("click", () => {
        writeReply(postContainer);
        replyButton.disabled = true;
    })

    postContainer.appendChild(titleItem);
    postContainer.appendChild(contentItem);
    postContainer.appendChild(replyButton);

    postList.appendChild(postContainer);

    postTitle.value = "";
    postContent.value = "";
}