/*

- För att kunna posta inlägg:
    - class post(title, content, comment)
    - input window(title and content?)
    - post button

- För att kunna kommentera på en post:
    - class comment(content,comment)?
    - reply button på varje post och comment

- Visa upp max 60 tecken på huvudsidan från varje post och comment.



*/

let postButton = document.getElementById("postButton");
postButton.addEventListener("click", () => {
    addPostToPage();
});

let postContainer = document.getElementById("posts");

function addPostToPage() {
    let postTitle = document.getElementById("titleInput");
    let postContent = document.getElementById("contentInput");
    //let postList = document.getElementById("posts");

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
        writeReply();
    })

    postContainer.appendChild(titleItem);
    postContainer.append(contentItem);
    postContainer.appendChild(replyButton);
}

function writeReply() {

    let replyInput = document.createElement("input");
    replyInput.classList.add("replyWindow");

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