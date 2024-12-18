
const menuToggle = document.querySelector('#js-menu-toggle');
const navigation = document.querySelector('#js-nav');

menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("is-active");
    navigation.classList.toggle("is-active");
  });