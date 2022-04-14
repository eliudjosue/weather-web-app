const api = { key: 'afceb549d1d1af690cee25ef341b3fa1',
url:`http://api.openweathermap.org/data/2.5/weather`,
url2:`https://api.openweathermap.org/data/2.5/onecall`
}
export const fetchData = async (query) => {
    try {
        const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err)
        
    }
}

export const fetchData2 = async (lat, lon) => {
    try {
        const response = await fetch(`${api.url2}?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=${api.key}&lang=es`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
        alert('hubo un error')
    }
}

export const toCelsius= (kelvin) => {
    return Math.round(kelvin - 273.15);
  }

  

