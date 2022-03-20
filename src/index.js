createClock();
createLogin();
createTodolist();
createGeo();

checkLogin() ? showLoginSpan() : showLoginForm();

updateClock();
setInterval(updateClock,1000);