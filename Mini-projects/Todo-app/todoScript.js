const todoList = [];

function renderTodoList() {
  let todoHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { todoName, todoDueDate } = todoObject; //Destructuring - easier way to take properties out of an object
    const html = `
    <div>${todoName}</div>
    <div>${todoDueDate}</div>
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList()
    " class="deleteTodo-btn" >Delete</button>
    `; //Generating html using template literals means directly writing html in js
    todoHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoHTML;
}

function addToDo() {
  const inputElement = document.querySelector(".todoInput");
  const todoName = inputElement.value;

  const dateInputElement = document.querySelector(".todoDateInput");
  const todoDueDate = dateInputElement.value;

  todoList.push({
    todoName,
    todoDueDate,
  });
  inputElement.value = "";
  dateInputElement.value = "";

  renderTodoList();
}
