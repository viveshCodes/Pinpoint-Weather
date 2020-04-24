// API Key From AccuWeather
const key = 'jKeGVcQ6dIAACKY7IHnLTnbI3Jb6Jz3P'; 


/* Async Function To Make Request To Current Condition API
 - get weather information 
 __________________________________________________________*/
const getWeather = async (id) =>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};



/* Async Function To Make Request To Location API
 - get city information 
 ________________________________________________*/
const getCity = async (city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

