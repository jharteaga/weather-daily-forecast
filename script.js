//Controls
const searchBtn = document.querySelector('.fa-search');
const city = document.getElementById('city');
const metric = document.querySelector('.metrics-container .selected');
const updateBtn = document.getElementById('update');
const metricC = document.getElementById('celsious');
const metricF = document.getElementById('farenheit');
const cityForm = document.querySelector('.cities');
let tempMetric = 'metric';

//Information
const tempNumber = document.querySelector('.tempNumber');
const tempDesc = document.querySelector('.tempDesc');
const infoDescArr = document.querySelectorAll('.info-desc');

getForecast();

//Get forecast information
function getForecast() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city.value},us&appid=71781884cf70876dbf9f5326ed95d5a1&units=${tempMetric}`,
    {
      method: 'get'
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      tempNumber.textContent = Number(data.main.temp).toFixed(1);
      tempDesc.textContent = data.weather[0].description;
      infoDescArr[0].textContent = data.wind.speed + ' km/h';
      infoDescArr[1].textContent = data.main.humidity + '%';
      infoDescArr[2].textContent = data.main.feels_like;
    });
}

cityForm.addEventListener('submit', (e) => {
  e.preventDefault();
  getForecast();
});

searchBtn.addEventListener('click', () => {
  getForecast();
});

metricC.addEventListener('click', () => {
  metricC.classList.add('selected');
  metricF.classList.remove('selected');
  tempMetric = 'metric';
  getForecast();
});

metricF.addEventListener('click', () => {
  metricF.classList.add('selected');
  metricC.classList.remove('selected');
  tempMetric = 'imperial';
  getForecast();
});
