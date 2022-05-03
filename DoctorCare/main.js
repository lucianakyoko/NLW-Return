function onScroll() {
  const nav = document.querySelector('#navigation');
 
  if(scrollY > 24) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  };
}


function openMenu() {
  const body = document.querySelector('body');

  body.classList.add('menu-expended');
}

function closeMenu() {
  const body = document.querySelector('body');

  body.classList.remove('menu-expended');
}