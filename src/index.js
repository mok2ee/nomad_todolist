createClock();
createLogin();
createTodolist();
createGeo();
createBg();

checkLogin() ? showLoginSpan() : showLoginForm();

setInterval(updateClock,1000);