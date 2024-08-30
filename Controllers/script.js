$(document).ready(function () {
  $(".on").click(function () {
    $(".alert").css({
      transform: "translateX(0)",
    });
  });

  $(".close").click(function () {
    $(".alert").css({
      transform: "translateX(150%)",
    });
  });

  $(".out").click(function () {
    $(".alert").css({
      transform: "translateX(150%)",
    });
  });
});

$(document).ready(function () {
  $(".on").click(function () {
    $(".alert").css({
      transform: "translateX(0)",
    });
  });

  $(".close").click(function () {
    $(".alert").css({
      transform: "translateX(150%)",
    });
  });

  $(".out").click(function () {
    $(".alert").css({
      transform: "translateX(150%)",
    });
  });
});

ScrollReveal({ reset: true });
ScrollReveal().reveal(".banner", { easing: "ease-in", delay: 100 });
ScrollReveal().reveal(".news", { easing: "ease-in", delay: 200 });
ScrollReveal().reveal(".events", { easing: "ease-in", delay: 200 });
ScrollReveal().reveal(".jobs", { easing: "ease-in", delay: 200 });
ScrollReveal().reveal(".register", { easing: "ease-in", delay: 200 });


const burger = document.querySelector("#burger");
burger.addEventListener("click", () => {
  Array.prototype.forEach.call(burger.children, (c) => {
    c.classList.toggle("active");
  });
});