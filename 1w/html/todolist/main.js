document.getElementById("task-input").addEventListener("keydown", function (e) {
    if (e.key == 'Enter') {
        // 값을 addTask 넣기
        // input value clear 하기
        addTask(e.target.value);
        e.target.value = "";
    }
})

function addTask(task) {
    const taskListEl = document.getElementById("tasklist"); // ol 찾기
    const newTaskEl = document.createElement("li"); // li 만들기
    newTaskEl.textContent = task // li안에 값 넣기
    if (task === "special") {
        newTaskEl.className = "task special"
    } else {
        newTaskEl.className = "task"
    }
    taskListEl.appendChild(newTaskEl); // ol 안에 넣기
}

// addTask("밥 먹기")

