document.addEventListener('DOMContentLoaded', function () {
  //Hamburger menu button
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('#' + burger.dataset.target);
  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

  // fetch(
  //   'https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?inc=name&nat=ca&noinfo'
  // ).then((response) => {
  //   if (response.status !== 200) {
  //     if (response.status === 429) {
  //       fetch('names.json')
  //         .then((response) => {
  //           return response.json();
  //         })
  //         .then((json) => {
  //           const jsonName = json[Math.floor(Math.random() * json.length)];
  //           document
  //             .getElementById('contact-name')
  //             .setAttribute(
  //               'placeholder',
  //               `${jsonName.name} ${jsonName.surname}`
  //             );
  //         });
  //     }
  //     console.error(
  //       `Error with fetching random placeholder name: ${response.status}`
  //     );
  //     return;
  //   }
  //   response.json().then((json) => {
  //     document
  //       .getElementById('contact-name')
  //       .setAttribute(
  //         'placeholder',
  //         `${json.results[0].name.first} ${json.results[0].name.last}`
  //       );
  //   });
  // });

  let last_known_scroll_position = 0;
  let ticking = false;
  let nameHidden = false;

  function handleScrollHideOfHeader(scroll_pos) {
    const name = document.getElementById('name');
    const nameRect = name.getBoundingClientRect();
    const nameOverlay = document.getElementById('nameOverlay');

    if (nameHidden === false && nameRect.top < 10) {
      name.style.color = '#4582ec';
      nameHidden = true;
      nameOverlay.style.display = 'block';
    } else if (nameHidden === true && nameRect.top >= 10) {
      name.style.color = 'white';
      nameHidden = false;
      nameOverlay.style.display = 'none';
    }
  }

  window.addEventListener("scroll", function (e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        handleScrollHideOfHeader(last_known_scroll_position);
        ticking = false;
      });

      ticking = true;
    }
  });
});
