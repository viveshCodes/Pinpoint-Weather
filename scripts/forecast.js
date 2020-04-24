// API Key From AccuWeather
const key = 'jKeGVcQ6dIAACKY7IHnLTnbI3Jb6Jz3P'; 

// Async Function To Make Request To Location API
const getCity = async (city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};
getCity('Birganj')
    .then(data => console.log(data))
    .catch(err => console.log(err));
