window.addEventListener("DOMContentLoaded", function() {
  const html            = document.querySelector("html");
  let theme             = window.localStorage.getItem('theme') || '';

  theme && html.classList.add(theme)

  // theme light click
  document.querySelector('#theme-light').addEventListener('click', function () {
    html.classList.remove('theme-dark')
    html.classList.add('theme-light')
    window.localStorage.setItem('theme', 'theme-light')
  })

  // theme dark click
  document.querySelector('#theme-dark').addEventListener('click', function () {
    html.classList.remove('theme-light')
    html.classList.add('theme-dark')
    window.localStorage.setItem('theme', 'theme-dark')
  })

  // theme auto click
  document.querySelector('#theme-auto').addEventListener('click', function() {
    html.classList.remove('theme-light')
    html.classList.remove('theme-dark')
    window.localStorage.setItem('theme', '')
  })
});
