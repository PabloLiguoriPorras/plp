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

//buttons for project cards

let currentIndex = 0;
        const cards = document.querySelectorAll('.card');
        const totalCards = cards.length;

        // Create indicators
        const indicatorsContainer = document.getElementById('indicators');
        for (let i = 0; i < totalCards; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (i === 0) indicator.classList.add('active');
            indicator.onclick = () => goToSlide(i);
            indicatorsContainer.appendChild(indicator);
        }

        function updateCarousel() {
            cards.forEach((card, index) => {
                card.className = 'card';
                
                if (index === currentIndex) {
                    card.classList.add('center');
                } else if (index === (currentIndex - 1 + totalCards) % totalCards) {
                    card.classList.add('left');
                } else if (index === (currentIndex + 1) % totalCards) {
                    card.classList.add('right');
                } else {
                    card.classList.add('hidden');
                }
            });

            // Update indicators
            document.querySelectorAll('.indicator').forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }

        function moveCarousel(direction) {
            currentIndex = (currentIndex + direction + totalCards) % totalCards;
            updateCarousel();
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') moveCarousel(-1);
            if (e.key === 'ArrowRight') moveCarousel(1);
        });

        // Initialize
        updateCarousel();
