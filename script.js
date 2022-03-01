const lists = document.querySelectorAll(".card-body ul li");
const form = document.forms["form"];
const input = form.firstElementChild.nextElementSibling;
const addBtn = form.lastElementChild;
addBtn.addEventListener("click", (event) => {
    const ul = document.querySelector(".card-body ul");
    const li = document.createElement("li");
    const textspan = document.createElement("span");
    const deletespan = document.createElement("span");
    const value = input.value;
    deletespan.textContent = `delete`;
    textspan.textContent = value;
    deletespan.classList.add("deleteBtn");
    li.appendChild(textspan);
    li.appendChild(deletespan);
    ul.appendChild(li);
    deletespan.addEventListener("click", () => {
        li.remove();
    })
    event.stopPropagation();
})
lists.forEach((element) => {
    const deleteBtn = element.lastElementChild;
    deleteBtn.addEventListener("click", (event) => {
        element.remove();
        event.stopPropagation();
    })
})