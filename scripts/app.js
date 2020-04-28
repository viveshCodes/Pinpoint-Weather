const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

/*update UI after fetching data
________________________________*/
const updateUI = (data) =>{
     // destructure data
     const {cityDetails , weather} = data ;

    // update details templates
    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;

    // update day/night image
    let timeSource = null;
    if(weather.IsDayTime){
        timeSource = 'img/day.svg';
    } else {
        timeSource = 'img/night.svg';
    }
    time.setAttribute('src',timeSource);

    //update icon
    const iconScource = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src' , iconScource);

    // remove d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};

/*update city when user inputs it 
__________________________________*/
// const updateCity = async (city) =>{

//     const cityDetails = await getCity(city);
//     const weather = await getWeather(cityDetails.Key);

//     return { cityDetails,weather};
// };


/*get city name from user
_________________________*/
cityForm.addEventListener('submit', event =>{
    // prevent default action
    event.preventDefault();

    // get city value from user
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update UI with new city
    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

     // set local storage
     localStorage.setItem('city' , city);   

});

if(localStorage.getItem('city')){
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
}