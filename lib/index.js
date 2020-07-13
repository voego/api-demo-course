const input = document.getElementById('input');
const submitButton = document.getElementById('submit');
const englishSection = document.getElementById('english');
const lengthSection = document.getElementById('length');
const rightHandSide = document.querySelector('.rhs');

const insertResults = (query) => {
  fetch(`https://wagon-dictionary.herokuapp.com/${query}`)
  .then(response => response.json())
  .then((data) => {
    console.log('successfully executed');
    console.log(data);
    rightHandSide.classList.remove('d-none');
    englishSection.innerText = (data.found ? 'Yes' : 'No');
    lengthSection.innerText = data.length;
  });
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  insertResults(input.value);
})
