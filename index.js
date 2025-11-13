document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        const icon = button.querySelector(".icon");

        const isOpen = answer.style.display === "block";

        answer.style.display = isOpen ? "none" : "block";
        icon.textContent = isOpen ? "+" : "−";
    });
});
