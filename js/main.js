(function(){
    const shrinkHeader = 100;
    let elem = document.querySelector('header');
    window.addEventListener('scroll', function () {
       var scroll = getCurrentScroll();
          if (scroll >= shrinkHeader) {
            elem.classList.add('fixedheader');
          } else {
            elem.classList.remove('fixedheader');
          };
      });
    function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
    }

    const menu = document.querySelector('.m-menu');
    const openMenuBtn = document.querySelector('.mobile-menu');
    const closeMenuBtn = document.querySelector('.close-menu');
    if (menu) {
        openMenuBtn.addEventListener('click', function() {
            menu.classList.add('opened');
        });
        closeMenuBtn.addEventListener('click', function() {
            menu.classList.remove('opened');
        });
    }
  })();