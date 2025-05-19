<script>
  document.getElementById("addButton").onclick = function () {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const listItem = document.createElement("li");

      // Create text node
      const taskNode = document.createTextNode(taskText);
      listItem.appendChild(taskNode);

      // Create delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.onclick = function () {
        listItem.remove();
      };

      listItem.appendChild(deleteBtn);
      document.getElementById("taskList").appendChild(listItem);

      taskInput.value = "";
    }
  };
</script>
