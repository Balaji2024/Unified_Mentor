document.addEventListener("DOMContentLoaded", () => {
    const commentForms = document.querySelectorAll(".comment-form");

    commentForms.forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            // Get input values
            const nameInput = form.querySelector(".name-input").value;
            const messageInput = form.querySelector(".message-input").value;

            // Create a new comment element
            const commentList = form.previousElementSibling;
            const newComment = document.createElement("li");
            newComment.innerHTML = `<strong>${nameInput}</strong>: ${messageInput}`;

            // Append the comment and clear the form
            commentList.appendChild(newComment);
            form.reset();
        });
    });
});
