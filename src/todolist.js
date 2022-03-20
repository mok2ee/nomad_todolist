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
    todolist.ul.classList.add(HIDDEN_CLASSNAME);
    todolist.input.type = "text";

    todolist.form.addEventListener("submit", submittodolist);    
}

function showtodolistUl() {
    todolist.ul.classList.remove(HIDDEN_CLASSNAME);
}

function submittodolist(e) {
    e.preventDefault();
    todolist.list.push(todolist.input.value);
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(todolist.list));
    todolist.input.value = "";
}