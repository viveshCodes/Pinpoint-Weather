const cityForm = document.querySelector('form');

cityForm.addEventListener('submit', event =>{
    // prevent default action
    event.preventDefault();

    // get city value from user
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update UI with new city

});