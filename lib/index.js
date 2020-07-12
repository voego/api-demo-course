// TODO: Autocomplete the input with AJAX calls.
const input = document.getElementById('input');
const submitButton = document.getElementById('submit');
const englishSection = document.getElementById('english');
const lengthSection = document.getElementById('length');
const rhs = document.querySelector('.rhs');

const insertResults = (query) => {
  fetch(`https://wagon-dictionary.herokuapp.com/${query}`)
  .then(response => response.json())
  .then((data) => {
    rhs.classList.remove('d-none');
    englishSection.innerText = (data.found ? 'Yes' : 'No');
    lengthSection.innerText = data.length;
  });
};

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  insertResults(input.value);
})

console.log('hello');
