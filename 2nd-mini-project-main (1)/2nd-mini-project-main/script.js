
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

Shery.mouseFollower();
Shery.makeMagnet(".magnet");




// ---------- background change
var bgChange = function () {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards1",
      start: "-10% 70%",
      end: "-5% 0%",
      // markers: true,
      scrub: 1,
    },
  });
  tl.to(".page-1", {
    backgroundColor: "#FDEEC8",
  });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards2",
      start: "-10% 70%",
      end: "-5% 0%",
      // markers: true,
      scrub: 1,
    },
  });
  tl.to(".page-1", {
    backgroundColor: "#ffc379",
  });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards3",
      start: "-60% 70%",
      end: "-55% 0%",
      // markers: true,
      scrub: 1,
    },
  });
  tl.to(".page-1", {
    backgroundColor: "#FCDDB8",
  });
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards4",
      start: "-80% 70%",
      end: "-75% 0%",
      // markers: true,
      scrub: 1,
    },
  });
  tl.to(".page-1", {
    backgroundColor: "#ceffb7",
  });
};

bgChange();


// loading nomber

var loadnum = function(){
    var timer = document.querySelector(".no span");
var grow = 0;

setInterval(function () {
  if (grow < 196) {
    timer.innerHTML = grow++;
  } else {
    timer.innerHTML = grow;
  }
}, 30);

}
loadnum();




document.addEventListener("DOMContentLoaded", function () {
  var tl = gsap.timeline({ paused: true });

  tl.from(".nav-head h1", {
    opacity: 0,
    y: -20,
    duration: 0.5,
    delay: 0.5,
  })
    .from(".nav-menu p", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.3,
    })
    .from(".nav-img", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.3,
    });

  let menuIcon = document.getElementById("menu-icon");
  let closeIcon = document.getElementById("close-icon");
  let navBar = document.querySelector(".nav-bar");

  function openMenu() {
    navBar.style.top = "0";
    tl.restart();
  }

  function closeMenu() {
    navBar.style.top = "-100%";
    tl.pause(0);
  }

  menuIcon.addEventListener("click", openMenu);
  closeIcon.addEventListener("click", closeMenu);
});

let menuIcon = document.getElementById("menu-icon");
let closeIcon = document.getElementById("close-icon");
let navBar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", function () {
  navBar.style.top = "0";
  menuIcon.style.display = "none";
});

closeIcon.addEventListener("click", function () {
  navBar.style.top = "-100%";
  menuIcon.style.display = "block";
});
gsap.to(".cards", {
  scrollTrigger: {
    trigger: ".page-1",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".end",
    scrub: 1,
  },
  y: "-380%",
  duration: 3,
});

var tl = gsap.timeline();

tl.from(".cards", {
  opacity: 0,
  y: -20,
  delay: 1,
  duration: 1,
  stagger: 0.3,
});

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

string.addEventListener("mousemove", function (dets) {
  var path = `M -500 100 Q 1500 ${dets.clientY} 3500 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.1)",
  });
});




// bottle animation

const bottleAnimate = function(){
    var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".page3",
          start: "0% 95%",
          end: "70% 50%",
          scrub: true,
        },
      });
      
      tl.to(".p2-bottle", {
        top: "230%",
      });
      
      var tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".page5",
          start: "0% 95%",
          end: "70% 50%",
          scrub: true,
          // markers: true,
        },
      });
      
      tl2.to(".p2-bottle", {
        top: "485%",
      });
}
bottleAnimate();

function page4Animation() {

  let eleCcon = document.querySelector('#elem-container');
  let fixed = document.querySelector('#fixed-img');
  eleCcon.addEventListener("mouseenter",()=>{
      fixed.style.display = "block";
  });
  eleCcon.addEventListener("mouseleave",()=>{
      fixed.style.display = "none";
  });
  
  let elems = document.querySelectorAll("#elem");
  elems.forEach(function(e){
      e.addEventListener("mouseenter",function(){
          let image = e.getAttribute("data-image")
          fixed.style.backgroundImage = `url(${image})`
      })
  })
}
page4Animation();

