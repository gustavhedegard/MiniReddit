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
postButton.addEventListener("click", function(){
    addPostToPage();
});

function addPostToPage() {
    let postTitle = document.getElementById("titleInput");
    let postContent = document.getElementById("contentInput");
    let postList = document.getElementById("posts");

    let title = postTitle.value.trim();

    let titleItem = document.createElement("h3");
    titleItem.textContent = title;
    postList.appendChild(titleItem);

    let content = postContent.value.trim();
    let contentItem = document.createElement("p");
    contentItem.textContent = content;
    postList.append(contentItem);

    let replyButton = document.createElement("button");
    replyButton.classList.add("replyButton");
    replyButton.textContent = "Reply";
    replyButton.addEventListener("click", () => {
        writeReply();
    })
    postList.appendChild(replyButton);
}

function writeReply() {
    let postList = document.getElementById("posts");

    let replyInput = document.createElement("input");
    reply.classList.add("replyWindow");
    postList.append(replyInput);

    let replyPost = document.createElement("button")
    

    let replyContent = reply.value.trim();
    let replyItem = document.createElement("p");
    replyItem.textContent = replyContent;
    postList.append(replyItem);


}