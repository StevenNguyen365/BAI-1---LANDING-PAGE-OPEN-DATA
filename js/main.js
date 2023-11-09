
/* Go to top */

var toTop = document.getElementById("goTop")

window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTop.style.display = "block"
    } else {
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

/* Di chuyen den muc tieu thanh phan */
/* document.querySelectorAll('#menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollTo({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('#hide-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); */

/* Nut menu-mobile */
var menuIcon = document.querySelector(".hide-menu")
var menuList = document.querySelector(".menu-items");

menuIcon.addEventListener("click", function (event) {
    if (menuIcon.contains(event.currentTarget)) {
        menuList.classList.toggle("show-menu");
    } else {
        menuList.classList.remove("show-menu");
    }
});

/* slide show function */

//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;
// KHai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("myslide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides) {
        slides[slideIndex].style.display = "block";
    }
    dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }
    //tự động chuyển đổi slide sau 5s
    // setTimeout(showSlides, 5000);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);


function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* slide-show application */
//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex2;
// KHai bào hàm hiển thị slide
function showSlides2() {
    var i;
    var slides = document.getElementsByClassName("text-myslide");
    var dots = document.getElementsByClassName("text-dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }


    slides[slideIndex2].style.display = "block";
    dots[slideIndex2].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex2++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex2 > slides.length - 1) {
        slideIndex2 = 0
    }
    //tự động chuyển đổi slide sau 5s
    // setTimeout(showSlides2, 5000);
}
//mặc định hiển thị slide đầu tiên 
showSlides2(slideIndex2 = 0);


function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}