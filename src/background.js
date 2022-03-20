const bg = {};

function createBg() {
    bg.div = document.createElement("div");
    bg.shadow = document.createElement("div");

    bg.div.appendChild(bg.shadow);
    document.body.appendChild(bg.div);

    bg.div.classList.add(BG_CLASSNAME);

    updateBg();
}

function updateBg(){
    bg.div.style.backgroundImage = `url("img/bg${Math.floor(Math.random() * 4)}.jpg")`;
    console.log(bg.div.style);
}