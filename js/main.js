window.addEventListener("resize", body_Resize);

function navMenuButton_Click()
{
    let navList = document.querySelector("#navList");
    navList.classList.toggle("open");

    let btnMenu = document.querySelector("#btnMenu");
    btnMenu.classList.toggle("close");
}

function body_Resize()
{
    let navList = document.querySelector("#navList");
    navList.classList.remove("open");

    let btnMenu = document.querySelector("#btnMenu");
    btnMenu.classList.remove("close");
}