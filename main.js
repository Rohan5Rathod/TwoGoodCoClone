function locomotive(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}


function videoPlay() {
  var video_con = document.querySelector('.video_con');
  var playbtn = document.querySelector('.play');
  video_con.addEventListener('mouseenter', function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });
  video_con.addEventListener('mouseleave', function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });
  video_con.addEventListener('mousemove', function (e) {
    gsap.to(playbtn, {
      left: e.x ,
      top: e.y,
    });
  });
}

function loadingAni(){
    gsap.from('.hero .header', { opacity: 0, y: 100, duration: 1.2, stagger:0.2 });
gsap.from('.hero .myVideo', { opacity: 0, scale: 0.8, duration: 1.2, delay:0.5 });
}

function productMouseMove(){
  document.addEventListener("mousemove", function(e){
    gsap.to(".cursor",{
      left:e.x,
      top:e.y
    })
  })
  
  document.querySelectorAll(".product_image").forEach(function(e){
    e.addEventListener("mouseenter", function(e){
      gsap.to(".cursor",{
        transform: `translate(-50%, -50%) scale(2)`,
      })
    })
    e.addEventListener("mouseleave", function(e){
      gsap.to(".cursor",{
        transform: `translate(-50%, -50%) scale(0)`,
      })
    })
  })
}


// NAVBAR  
const button = document.querySelector('.buttonXX');
const burger = document.querySelector('.burger');
const menu = document.querySelector(".menu");
const header = document.querySelector(".header");
const logo = document.querySelector(".navbar_logo .logo");
const navbar_btn = document.querySelector(".navbar_btn");
const navbar_links = document.querySelector(".navbar_links");

const toggleNavbar = () => {
  NavTime.restart()
  NavTime2.restart()
  NavTime3.restart()
  burger.classList.toggle('burgerActive');
  menu.classList.toggle('opened');
  header.classList.toggle('color-white');
  logo.classList.toggle("invert");
  navbar_btn.classList.toggle("invert");
  navbar_links.classList.toggle("invert");
}

button.addEventListener('click',()=> toggleNavbar());
// NAVBAR  

// CART MENU 
const buy = document.querySelector(".ri-handbag-line");
const cart = document.querySelector(".cart");

const toggleCartMenu = () => {
  NavTime4.restart()
cart.classList.toggle("cart_opened");
header.classList.toggle('color-white');
logo.classList.toggle("invert");
navbar_btn.classList.toggle("invert");
navbar_links.classList.toggle("invert");
}

buy.addEventListener("click",() => toggleCartMenu());
// CART MENU 
var swiper = new Swiper('.mySwiper', {

  centeredSlides: true,
  scrollbar: {
  el: ".swiper-scrollbar",
  hide: true,
},
breakpoints: {
  439: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
},
});

const NavTime = gsap.timeline({ paused: true });
NavTime.from(".left_menu>.menu_link", {
  duration: 1,
  y: "100%",
  opacity: 0,
  ease: "power4",
  stagger: 0.09
});
const NavTime2 = gsap.timeline({ paused: true });
NavTime2.from(".right_menu>.menu_connect_us>ul li", {
  duration: 1.5,
  y: "100%",
  opacity: 0,
  ease: "power4",
  stagger:0.09
});

const NavTime3 = gsap.timeline({ paused: true });
NavTime3.from(".right_menu>.menu_nitty>ul li", {
  duration: 1.5,
  y: "100%",
  opacity: 0,
  ease: "power4",
  stagger:0.09
});

const NavTime4 = gsap.timeline({ paused: true });
NavTime4.from(".cart_content", {
  duration:0.4,
  y: "-100%",
  opacity: 0,
  ease: "power2",
  stagger:0.2
})
.from(".cart_text_scroll .cart_scroll", {
  duration:0.5,
  y: "-100%",
  opacity: 0,
  ease: "power4",
  stagger:0.2
})

function logoDownAni(){
  gsap.to(".navbar_logo img",{
    transform:"translateY(-100%)",
    scrollTrigger:{
      trigger:".hero",
      scroller:".main",
      markers:false,
      start:"top 0",
      end:"top -5%",
      scrub:true
    }
  })
  gsap.to(".navbar_items .navbar_links",{
    transform:"translateY(-100%)",
    opacity:0,
    scrollTrigger:{
      trigger:".hero",
      scroller:".main",
      markers:false,
      start:"top 0",
      end:"top -5%",
      scrub:true
    }
  })
}

locomotive();
logoDownAni();
// videoPlay();
loadingAni();
productMouseMove();

