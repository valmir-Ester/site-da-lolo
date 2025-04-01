let slideIndex = 0;
function showSlider(){
    let slides=document.querySelectorAll(".slides");
    for(let i=0; i < slides.length; i++){
        slides[i].style.display="none"
    }
    slideIndex ++;
    if(slideIndex > slides.length){slideIndex = 1}
    slides[slideIndex - 1].style.display="block"
    setTimeout(showSlider,2000);
}
showSlider()

// ampliar foto
const foto=document.querySelector("#foto");

foto.addEventListener("mousemove",(ev)=>{

    foto.src="cor.gif"
    foto.style="width:200px;"
})
foto.addEventListener("mouseout",(ev)=>{

    foto.src="lozi.png"
    foto.style="width:100px;"

})

