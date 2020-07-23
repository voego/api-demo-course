const input = document.getElementById('input');
const submitButton = document.getElementById('submit');
const englishSection = document.getElementById('english');
const lengthSection = document.getElementById('length');
const rightHandSide = document.querySelector('.rhs');

const getCountryCode = () => {

  fetch('https://api.ipify.org/?format=json')
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;

    fetch(`https://api.ipstack.com/${ip}?access_key=4040ad13a6a23248fc67c8b312d71b76&format=1`)
    .then(response => response.json())
    .then(data => {
      // console.log(data.country_code);
      const countryCode = data.country_code;
      // output.innerText = countryCode;
      console.log(countryCode);
      if (countryCode == 'GB') {
        // window.location.replace("https://my.cfte.education/courses/ai-in-finance-sg");
        window.location.href = "https://my.cfte.education/courses/ai-in-finance-sg";
        // window.open('https://my.cfte.education/courses/ai-in-finance-sg')
      }
    })
  })
}

window.addEventListener('load', getCountryCode());

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
