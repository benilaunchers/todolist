const lists = document.querySelectorAll(".card-body ul li");
lists.forEach((element) => {
    const deleteBtn = element.lastElementChild;
    deleteBtn.addEventListener("click", (event) => {
        element.remove();
        event.stopPropagation();
    })
})
