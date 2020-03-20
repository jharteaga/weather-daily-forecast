//Controls
const searchBtn = document.querySelector('.fa-search');
const city = document.getElementById('city').value;
const metric = document.querySelector('.metrics-container .selected');
const updateBtn = document.getElementById('update');

//Information
const tempNumber = document.querySelector('.tempNumber');
const tempDesc = document.querySelector('.tempDesc');
const infoDescArr = document.querySelectorAll('.info-desc');

searchBtn.addEventListener('click', () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=71781884cf70876dbf9f5326ed95d5a1&units=metric`,
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
});
