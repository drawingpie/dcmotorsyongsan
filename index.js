//반응형마우스오버 후 효과 제거//
$(document).on("touchstart", function(){ });

//슬라이드//
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  effect: 'fade',
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});

//모달창//
$(function() {

  $(".open01").click(function() {
    $('.modlacontent01').show();
    $(".mask").fadeIn();
  });

  $(".mask").click(function() {
    $('.modlacontent01').hide();
    $(".mask").fadeOut();

  });
});
$(function() {

  $(".open02").click(function() {
    $('.modlacontent02').show();
    $(".mask").fadeIn();
  });

  $(".mask").click(function() {
    $('.modlacontent02').hide();
    $(".mask").fadeOut();

  });
});
$(function() {

  $(".open03").click(function() {
    $('.modlacontent03').show();
    $(".mask").fadeIn();
  });

  $(".mask").click(function() {
    $('.modlacontent03').hide();
    $(".mask").fadeOut();

  });
});


//네비게이션//
$(function() {
  var rollHeader = 100;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
    if (scroll >= rollHeader) {
      $('.header').addClass('scroll').css("background-color", "#fff");
      $('.navi .menu a').addClass('scroll').css("color", "#0D0D0D");
    } else {
      $('.header').removeClass('scroll').css("background-color", "transparent");
      $('.navi .menu a').removeClass('scroll').css("color", "#fff");
    }
  });

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});

//스크롤 애니메이션//
AOS.init(); // breaks desktop & mobile

//폼 ajax수정//
window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");
  var status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    button.style = "display: block ";
    alert("전송이 완료되었습니다.");
  }

  function error() {
    alert("전송에 실패하셨습니다. 다시 시도해 주세요");
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

//슬라이드메뉴

$('.openbtn').on('click', function() {
  $('#sidebar').addClass('active');
  $('.overlay').fadeIn();
});

$('.closebtn').on('click', function() {
  $('#sidebar').removeClass('active');
  $('.overlay').fadeOut();
});

$('#sidebar a').on('click', function() {
  $('#sidebar').removeClass('active');
  $('.overlay').fadeOut();
});

//탑버튼//
$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('#topbtn').fadeIn();
    } else {
      $('#topbtn').fadeOut();
    }
  });

  $("#topbtn").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});
