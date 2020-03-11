document.addEventListener('DOMContentLoaded', function() {
  //Hamburger menu button
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('#' + burger.dataset.target);
  burger.addEventListener('click', function() {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

  fetch('https://uinames.com/api/')
    .then(response => {
      if (response.status !== 200) {
        console.log(`Error: ${response.status}`);
        return;
      }
      response.json().then((json) => {
        console.log(json)
      })
    })
});
