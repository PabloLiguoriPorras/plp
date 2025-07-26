//buttons disappearing

window.addEventListener('scroll', function () {
  const sideNav = document.getElementById('scroll-btns');
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY >= window.innerHeight) {
    sideNav.classList.add('visible');
  } else {
    sideNav.classList.remove('visible');
  }
});

//button for scrolling

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function() {
    let scrollDistance = document.documentElement.clientHeight;
    if (btn.className.split(' ').includes('scroll-up')) {
      scrollDistance *= -1;
    }
    window.scrollBy(0, scrollDistance);
  });
});

