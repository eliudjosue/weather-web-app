const api = { key: '715f20facf9985f34f0af3d161fa42fb',
url:`http://api.openweathermap.org/data/2.5/weather`,
url2:`https://api.openweathermap.org/data/2.5/onecall`
}
export const fetchData = async (query) => {
    try {
        const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
        alert('hubo un error')
    }
}

export const fetchData2 = async (lat, lon) => {
    try {
        const response = await fetch(`${api.url2}?lat=${lat}&lon=${lon}&exclude=hourly&appid=${api.key}&lang=es`);
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
