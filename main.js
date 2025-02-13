/*

- För att kunna posta inlägg:
    - class post(title, content, comment) nej
    - input window(title and content?) yes
    - post button yes

- För att kunna kommentera på en post:
    - class comment(content,comment)? nej
    - reply button på varje post och comment yes

- Visa upp max 60 tecken på huvudsidan från varje post och comment.



*/

let postButton = document.getElementById("postButton");
postButton.addEventListener("click", () => {
    addPostToPage();
});



function addPostToPage() {
    let postTitle = document.getElementById("titleInput");
    let postContent = document.getElementById("contentInput");
    let postList = document.getElementById("posts");

    let postContainer = document.createElement("div");
    postContainer.classList.add("post");

    let title = postTitle.value.trim();

    let titleItem = document.createElement("h3");
    titleItem.textContent = title;
    

    let content = postContent.value.trim();
    let contentItem = document.createElement("p");
    contentItem.textContent = content;
    

    let replyButton = document.createElement("button");
    replyButton.classList.add("replyButton");
    replyButton.textContent = "Reply";
    replyButton.addEventListener("click", () => {
        writeReply(postContainer);
    })

    postContainer.appendChild(titleItem);
    postContainer.appendChild(contentItem);
    postContainer.appendChild(replyButton);

    postList.appendChild(postContainer);

    postTitle.value = "";
    postContent.value = "";
}

function writeReply(postContainer) {

    let replyInput = document.createElement("input");
    replyInput.classList.add("replyWindow");
    replyInput.placeholder = "Write a reply";

    let submitReply = document.createElement("button");
    submitReply.classList.add("replyButton");
    submitReply.textContent = "Send";
    submitReply.addEventListener("click", () => {

        let replyText = replyInput.value.trim();
        let replyItem = document.createElement("p");
        replyItem.textContent = replyText;
        replyItem.classList.add("replyItem");
        postContainer.appendChild(replyItem);

        replyInput.remove();
        submitReply.remove();
    })

    postContainer.appendChild(replyInput);
    postContainer.appendChild(submitReply);

}