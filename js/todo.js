const todoform = document.querySelector(".toDoForm form");
const todoInput = todoform.querySelector("input");
const todoDiv = document.querySelector(".toDoForm");
const todoList = document.querySelector("#todoList");

const TODOS_KEY = "todos";

let toDos = [];

function todo(event){
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value =""; 
  const todoObj = {id:Date.now(),
    text:newTodo};
  toDos.push(todoObj);
  paintTodo(todoObj);
  saveTodo();
}

function saveTodo(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintTodo(todoObj){
  const li = document.createElement("li"); 
  li.id = todoObj.id;
  const span = document.createElement("span");
  span.innerText = `${todoObj.text}`;
  const button = document.createElement("button");
  button.innerText="✅";

  button.addEventListener("click", todoDelete)
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function todoDelete(event){
  //내가 선택한 버튼의 li를 없앰, localStorage에서도 id를 찾아 제거
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
  saveTodo(); 
}

todoform.addEventListener("submit", todo);


const savedTodo = localStorage.getItem(TODOS_KEY);

if(savedTodo !== null){
  const parsedTodo = JSON.parse(savedTodo);
  toDos = parsedTodo;
  parsedTodo.forEach(paintTodo);
}



