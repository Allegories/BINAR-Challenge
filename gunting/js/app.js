var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          nav.classList.add('bg-black-transparent', 'shadow');
        } else {
          nav.classList.remove('bg-black-transparent', 'shadow');
        }
      });

const $icon = document.querySelector('.icon');
const $arrow = document.querySelector('.arrow');

$icon.onmouseover = () => {
  $arrow.animate([
    {left: '0'},
    {left: '10px'},
    {left: '0'}
  ],{
    duration: 700,
    iterations: Infinity
  });
}
