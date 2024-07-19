// Shery.mouseFollower();
// Shery.makeMagnet(".magnet");


// Shery.hoverWithMediaCircle(".hover", {images: ["https://cdn.prod.website-files.com/6530f0423a815673c177472f/65b02cc301f229f77d4f38eb_Rectangle%20354.png", "https://cdn.prod.website-files.com/6530f0423a815673c177472f/65b02ceff5619c8b2f19a2bf_Rectangle%20356.png","https://cdn.prod.website-files.com/6530f0423a815673c177472f/65cc92c52f54e9dbba2a76cf_AdobeStock_51744816.jpeg"]});



document.addEventListener("DOMContentLoaded", function() {
    var tl = gsap.timeline({ paused: true });
    
    tl.from(".nav-head h1", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        delay: 0.5
    })
    .from(".nav-menu p", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.3
    })
    .from(".nav-img", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.3
    });

    let menuIcon = document.getElementById('menu-icon');
    let closeIcon = document.getElementById('close-icon');
    let navBar = document.querySelector('.nav-bar');

    function openMenu() {
        navBar.style.top = '0';
        tl.restart();
    }

    function closeMenu() {
        navBar.style.top = '-100%';
        tl.pause(0);
    }

    menuIcon.addEventListener('click', openMenu);
    closeIcon.addEventListener('click', closeMenu);
});

let menuIcon = document.getElementById('menu-icon');
let closeIcon = document.getElementById('close-icon');
let navBar = document.querySelector('.nav-bar');

menuIcon.addEventListener('click', function() {
    navBar.style.top = '0';
    menuIcon.style.display = 'none';
});

closeIcon.addEventListener('click', function() {
    navBar.style.top = '-100%';
    menuIcon.style.display= 'block'
});
gsap.to(".cards", {
    scrollTrigger: {
        trigger: ".page-1",
        pin: true,
        start:"top top",
        end:"bottom bottom",
        endTrigger: ".end",
        scrub:1,
    },
    y:"-380%",
    duration: 3,
})


var tl = gsap.timeline()

tl.from(".cards",{
    opacity:0,
    y:-20,
    delay:1,
    duration:1,
    stagger:0.3
})

var swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 2,
    speed: 500,
    loop: true,
    rotate: true,
    mousewheel: {
    invert: false,
  },
});

var Path = "M -500 100 Q 1500 100 3500 100";
var finalPath = "M -500 100 Q 1500 100 3500 100";

var string = document.querySelector(".string");

string.addEventListener("mousemove", function(dets){
    var path = `M -500 100 Q 1500 ${dets.clientY} 3500 100`;
    gsap.to("svg path", {
        attr: {d: path},
        duration: 0.3,
        ease: "power3.out"
    });
});

string.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
        attr: {d: finalPath},
        duration: 1.5,
        ease: "elastic.out(1,0.1)"
    });
});
