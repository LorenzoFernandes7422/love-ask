const btnNao = document.querySelector('.btn-nao');

btnNao.addEventListener('mouseover', () => {
  const maxX = window.innerWidth - btnNao.offsetWidth;
  const maxY = window.innerHeight - btnNao.offsetHeight;
  
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  
  btnNao.style.position = 'absolute';
  btnNao.style.left = `${randomX}px`;
  btnNao.style.top = `${randomY}px`;
  btnNao.style.transform = 'none';
});

btnNao.addEventListener('mouseout', () => {
  setTimeout(() => {
    btnNao.style.position = '';
    btnNao.style.left = '';
    btnNao.style.top = '';
  }, 1000);
});

document.querySelector('.btn-sim').addEventListener('click', function() {
    const celebrationImage = document.querySelector('.hidden-image');
    
    celebrationImage.classList.add('show');
    
    setTimeout(() => {
        celebrationImage.classList.remove('show');
    }, 5000);
    
    createConfetti();
});

function createConfetti() {
    const confettiSettings = { 
        target: 'confetti-canvas',
        max: 150,
        size: 1.5,
        animate: true,
        colors: [[255, 102, 179], [255, 182, 193], [255, 215, 0]],
        clock: 25
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    
    setTimeout(() => confetti.clear(), 5000);
}