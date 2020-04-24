const cityForm = document.querySelector('form');

const updateCity = async (city) =>{

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return { cityDetails,weather};
};


/*get city name from user
_________________________*/
cityForm.addEventListener('submit', event =>{
    // prevent default action
    event.preventDefault();

    // get city value from user
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update UI with new city
    updateCity(city)
        .then(data => console.log(data))
        .catch(err => console.log(err));

});