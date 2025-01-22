import { initializeApp } from  "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getPerformance } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-performance.js"
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCqBiRoGPJ5Uq1NvdL0uc8jrc9In0BZreo",
  authDomain: "pruthviraj-portfolio.firebaseapp.com",
  projectId: "pruthviraj-portfolio",
  storageBucket: "pruthviraj-portfolio.appspot.com",
  messagingSenderId: "928035000234",
  appId: "1:928035000234:web:c46ee6ff9ada474a01a5d3",
  measurementId: "G-KF4MJ1G8RQ"
};
      // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);
const db = getFirestore(app);


$(document).ready(function(){


$(window).on('load',function(){
  $('.preloader').addClass('complete')
});

$(window).on('scroll',function(){
  var scroll = $(window).scrollTop();
  console.log(scroll);
  if(scroll >=50){
    $(".sticky").addClass("stickyadd");
  }else{
    $(".sticky").removeClass("stickyadd");
  }
});

var waypoint = new Waypoint({
  element: document.getElementById('experience'),
  handler: function() {

    var p = document.querySelectorAll('.progress-bar');
    p[0].setAttribute("style", "width:80%;transition:2.3s all;");
    p[1].setAttribute("style", "width:70%;transition:1.8s all;");
    p[2].setAttribute("style", "width:65%;transition:1.7s all;");
    p[3].setAttribute("style", "width:80%;transition:2.3s all;");
    p[4].setAttribute("style", "width:70%;transition:1.5s all;");
    p[5].setAttribute("style", "width:60%;transition:1s all;");



  },
  offset: '90%'
});

var $child = $('.way-fade-up').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInUp');
  },{offset: '90%'});
});

var $child = $('.way-fade-left').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInLeft');
  },{offset: '90%'});
});

var $child = $('.way-fade-right').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInRight');
  },{offset: '90%'});
});

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    items:1,
    animateIn : "fadeInRight"

});



  var typed = new Typed(".element", {
  strings: ["Pruthviraj Pawar", "a Java Developer"],
  smartBackspace: true,
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  loopCount: Infinity,
  startDelay: 1000
});


$('a').smoothScroll({

  speed:1000,
  offset:0,
  easing: 'swing'
});

});
