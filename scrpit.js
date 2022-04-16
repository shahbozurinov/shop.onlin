let hoverBox1 = document.querySelector(".hover-box1");
let hoverBox2 = document.querySelector(".hover-box2");
let hoverBox3 = document.querySelector(".hover-box3");
let textBottom1 = document.querySelector(".text-bottom1");
let textBottom2 = document.querySelector(".text-bottom2");
let textBottom3 = document.querySelector(".text-bottom3");

let iconN = document.querySelector('.select');
let option2 = document.querySelector('.option2');

iconN.addEventListener('click', function() {
    iconN.classList.toggle('fol');
    option2.classList.toggle('fon');
    console.log('b');
});


hoverBox1.addEventListener('click', function() {
    hoverBox1.classList.toggle('actev');
    hoverBox2.classList.remove('actev');
    hoverBox3.classList.remove('actev');
    textBottom1.classList.toggle('rang');
    textBottom2.classList.remove('rang');
    textBottom3.classList.remove('rang');
    
});

hoverBox2.addEventListener('click', function() {
    hoverBox2.classList.toggle('actev');
    hoverBox1.classList.remove('actev');
    hoverBox3.classList.remove('actev');
    textBottom1.classList.remove('rang');
    textBottom2.classList.toggle('rang');
    textBottom3.classList.remove('rang');

});

hoverBox3.addEventListener('click', function() {
    hoverBox3.classList.toggle('actev');
    hoverBox1.classList.remove('actev');
    hoverBox2.classList.remove('actev');
    textBottom1.classList.remove('rang');
    textBottom2.classList.remove('rang');
    textBottom3.classList.toggle('rang');
});


// const slideImage = document.querySelector('.slide-image2');
// const slidesContainer = document.querySelector('.slides-container2');
// const nextBtn = document.querySelector('.next-btn');
// const prevBtn = document.querySelector('.prev-btn');
// const navigationDots = document.querySelector('.navigation-dots');

// let numberOfImages = slideImage.length;
// let slideWidth = slideImage[0].clientWidth;

// set up the slider

// function init() {
    /*

      slideImage[0] = 0
      slideImage[2] = 100%
      slideImage[3] = 200%

    */

//     slideImage.forEach((img, i) => {
//         img.style.left = i * 100 + "%";
//     });

//     slideImage[0].classList.add("active");
// }

// create navigat ion dots

// function createNavigationDots() {
//     for (let i = 0; i < numberOfImages; i++) {
//         const dot = document.createElement("div");
//         dot.classList.add('single-dot');
//         navigationDots.appendChild(dot);
//     }

//     navigationDots.children[0].classList.add("active");
// }

// naext  button

// nextBtn.addEventListener('click', () => {
//     slidesContainer.style.transform = 'translateX(-'+ slideWidth +'px)';

// });