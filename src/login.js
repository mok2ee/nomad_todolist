const login = {};

function createLogin() {
    login.div = document.createElement("div");
    login.span = document.createElement("span");
    login.form = document.createElement("form");
    login.input = document.createElement("input");

    login.form.appendChild(login.input);
    login.div.appendChild(login.form);
    login.div.appendChild(login.span);
    document.body.appendChild(login.div);

    login.div.classList.add(LOGIN_CLASSNAME);
    login.span.classList.add(HIDDEN_CLASSNAME);
    login.form.classList.add(HIDDEN_CLASSNAME);
    login.input.type = "text";

    login.form.addEventListener("submit", submitLogin);
}

function checkLogin() {
    return !(localStorage.getItem(USERNAME_KEY) === null);
}

function showLoginForm() {
    login.span.classList.add(HIDDEN_CLASSNAME);
    login.form.classList.remove(HIDDEN_CLASSNAME);
}

function showLoginSpan() {
    setLoginSpan();
    login.form.classList.add(HIDDEN_CLASSNAME);
    login.span.classList.remove(HIDDEN_CLASSNAME);
    showTodolistDiv();
}


function setLoginSpan() {
    login.span.innerHTML = `환영합니다. ${localStorage.getItem(USERNAME_KEY)} 님`;
}

function submitLogin(e) {
    e.preventDefault();
    localStorage.setItem(USERNAME_KEY, login.input.value);
    showLoginSpan();
}
