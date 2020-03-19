document.addEventListener('DOMContentLoaded', function() {
  //Hamburger menu button
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('#' + burger.dataset.target);
  burger.addEventListener('click', function() {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

  fetch(
    'https://cors-anywhere.herokuapp.com/https://uinames.com/api/?region=canada'
  ).then(response => {
    if (response.status !== 200) {
      if (response.status === 429) {
        fetch('names.json')
          .then(response => {
            return response.json();
          })
          .then(json => {
            const jsonName = json[Math.floor(Math.random() * json.length)];
            document
              .getElementById('contact-name')
              .setAttribute(
                'placeholder',
                `${jsonName.name} ${jsonName.surname}`
              );
          });
      }
      console.error(`Error: ${response.status}`);
      return;
    }
    response.json().then(json => {
      document
        .getElementById('contact-name')
        .setAttribute('placeholder', `${json.name} ${json.surname}`);
    });
  });
});
