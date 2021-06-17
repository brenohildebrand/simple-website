const button = document.getElementById('hello-world-button');

button.addEventListener(`click`, (event) => {
  event.preventDefault();
  alert(`You clicked the 'Hello World' button.`);
});
