// app.js
requireAuth();

document.getElementById("todoForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task) {
        addTask(task);
        taskInput.value = "";
    }
});

function addTask(task) {
    let todoList = document.getElementById("todoList");

    let div = document.createElement("div");
    div.classList.add("todo-item");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "10px";

    let span = document.createElement("span");
    span.textContent = task;

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            span.classList.add("completed");
        } else {
            span.classList.remove("completed");
        }
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        div.remove();
    };

    div.appendChild(checkbox);
    div.appendChild(span);
    div.appendChild(deleteBtn);
    todoList.appendChild(div);
}

// Logout
document.getElementById("logoutBtn").addEventListener("click", function (e) {
    e.preventDefault();
    logoutUser();
});
