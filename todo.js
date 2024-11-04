function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
      const taskList = document.getElementById("taskList");

      const taskItem = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("task-checkbox");
      checkbox.onclick = () => {
          taskSpan.classList.toggle("completed");
      };

      
      const taskSpan = document.createElement("span");
      taskSpan.classList.add("task-text");
      taskSpan.textContent = taskText;

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = () => taskList.removeChild(taskItem);

      taskItem.appendChild(checkbox);
      taskItem.appendChild(taskSpan);
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);

      taskInput.value = "";
  }
}
