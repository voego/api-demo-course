const input = document.getElementById('input');
const submitButton = document.getElementById('submit');
const englishSection = document.getElementById('english');
const lengthSection = document.getElementById('length');
const rightHandSide = document.querySelector('.rhs');

let userIp = undefined;

const getUserIp = () => {
  fetch('https://api.ipify.org/?format=json')
  .then(response => response.json())
  .then(data => {
    userIp = data.ip;
  })
};

getUserIp();

console.log(userIp);

const getCountryCode = (ip) => {
  // const ip = ipFunction();
  fetch(`http://api.ipstack.com/${ip}?access_key=4040ad13a6a23248fc67c8b312d71b76&format=1`)
  .then(response => response.json())
  .then(data => {
    // console.log(data.country_code)
    return data.country_code;
  })
}




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
