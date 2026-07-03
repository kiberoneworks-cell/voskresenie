// alert("Добро пожаловать");

let themeButton=document.getElementById("themeButton");
let messageText=document.getElementById("messageText");
let darkTheme=false;

themeButton.onclick=function()
{
    if(darkTheme==false)
    {
        document.body.style.background="black";
        document.body.style.color="white";
        messageText.textContent="Темная тема включена";
        darkTheme=true;
    }  
    else
    {
        document.body.style.background="bisque";
        document.body.style.colot="#5c5858";
        messageText.textContent="Светлая тема включена";
        darkTheme=false;
    }
};
