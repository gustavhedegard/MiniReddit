export function writeReply(postContainer) {

    let replyButton = postContainer.querySelector(".replyButton");
    let replyContainer = document.createElement("div");
    replyContainer.classList.add("replyContainer");

    let replyInput = document.createElement("textarea");
    replyInput.classList.add("replyWindow");
    replyInput.placeholder = "Write a reply";

    let submitReply = document.createElement("button");
    submitReply.classList.add("sendButton"); 
    submitReply.textContent = "Send";

    submitReply.addEventListener("click", () => {

        let replyText = replyInput.value.trim();
        let replyItem = document.createElement("p");
        replyItem.textContent = replyText;
        replyItem.classList.add("replyItem");
        postContainer.appendChild(replyItem);

        replyContainer.remove();
        replyButton.disabled = false;
    })

    replyContainer.appendChild(replyInput);
    replyContainer.appendChild(submitReply);
    postContainer.appendChild(replyContainer);

}