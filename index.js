// in order to access from first element

var taskbar=document.getElementsByClassName('taskbar')[0];
var start=document.getElementsByClassName('start')[0];

taskbar.addEventListener("click",()=>{

    console.log('clicked');

    if(start.style.bottom=="50px")
    {
        start.style.bottom="-650px";
    }
    else
    {
        start.style.bottom="50px";
    }
})