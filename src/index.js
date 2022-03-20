createClock();
createLogin();
createTodolist();

checkLogin() ? showLoginSpan() : showLoginForm();

updateClock();
setInterval(updateClock,1000);