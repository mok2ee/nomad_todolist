const todolist = {};

function createTodolist() {
    todolist.div = document.createElement("div");
    todolist.ul = document.createElement("ul");
    todolist.form = document.createElement("form");
    todolist.input = document.createElement("input");
    todolist.list = [];

    todolist.form.appendChild(todolist.input);
    todolist.div.appendChild(todolist.form);
    todolist.div.appendChild(todolist.ul);
    document.body.appendChild(todolist.div);

    todolist.div.classList.add(TODOLIST_CLASSNAME);
    todolist.div.classList.add(HIDDEN_CLASSNAME);
    todolist.input.type = "text";

    todolist.form.addEventListener("submit", submittodolist);    
}

function checkTodolist() {
    return !(localStorage.getItem(TODOLIST_KEY) === null);
}

function showTodolistDiv() {
    todolist.div.classList.remove(HIDDEN_CLASSNAME);
    if(checkTodolist()){
        JSON.parse(localStorage.getItem(TODOLIST_KEY)).forEach((val) => makeTodolistLi(val.txt));
    }
}

function makeTodolistLi(t){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    const value = {
        id : todolist.list.length,
        txt : t,
    }

    li.appendChild(span);
    li.appendChild(btn);
    todolist.ul.appendChild(li);

    li.id = value.id;
    span.innerHTML = t;
    btn.innerHTML = "X";
    
    btn.addEventListener("click",deleteTodolistLi);

    todolist.list.push(value);
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(todolist.list));
}

function deleteTodolistLi(e){
    const btn = e.target;
    const li = btn.parentElement;
    const id = li.id;

    li.remove();
    todolist.list = todolist.list.filter((val) => val.id !== parseInt(id));
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(todolist.list));
}

function submittodolist(e) {
    e.preventDefault();
    makeTodolistLi(todolist.input.value);
    todolist.input.value = "";
}