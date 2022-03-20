const clock = {};

function createClock() {
    clock.div = document.createElement("div");
    clock.span = document.createElement("span");

    clock.div.appendChild(clock.span);
    document.body.appendChild(clock.div);
    
    clock.div.classList.add(CLOCK_CLASSNAME);
    
    updateClock();
}

function updateClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");

    clock.span.innerHTML = `${hour}:${min}:${(sec)}`;
}
