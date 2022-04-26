function changeMode() {
  changeClasses();
  changeText();
  //   funcão principal para chama do dark mode e mudanças do texto em html
}

function changeClasses() {
  button.classList.toggle(darkModeClass);
  h1.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);

  //   mudando para darkmode
}

function changeText() {
  const lightMode = "Light Mode";
  const darkMode = "Dark Mode";

  if (body.classList.contains(darkModeClass)) {
    button.innerHTML = lightMode;
    h1.innerHTML = darkMode + " ON";
    return;
  }

  button.innerHTML = darkMode;
  h1.innerHTML = lightMode + " ON";
  //   invertendo tudo
}

const darkModeClass = "dark-mode";
const button = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

button.addEventListener("click", changeMode);
