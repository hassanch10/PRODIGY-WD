document.getElementById("btn").addEventListener("mouseover", function(){
    this.style.backgroundColor="#ffffff"
    this.style.color="#000000"
    this.style.border="#000000"
});
document.getElementById("btn").addEventListener("mouseleave", function(){
    this.style.backgroundColor="#ffffff"
    this.style.color="#000000"
    this.style.border="#000000"
});

var img= document.getElementById("hi");
window.addEventListener("scroll" , function(){
 img.classList.add("header-i");
});
