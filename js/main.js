/* Go to top */

var toTop = document.getElementById("goTop")

window.onscroll = function(){
    scrollFunction()
}

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        toTop.style.display = "block"
    }else {
        toTop.style.display = "none"
    }
}

/* function goTop(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
} */

toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });