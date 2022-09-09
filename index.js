const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover" , (event)=>{
    var xPos = (event.pageX - btnEl.offsetLeft);
    var yPos = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos" ,xPos +"px");
    btnEl.style.setProperty("--yPos" ,yPos +"px")
})