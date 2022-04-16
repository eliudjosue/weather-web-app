const token = process.env.REACT_APP_TOKEN;
const api = process.env.REACT_APP_API;
const api2 = process.env.REACT_APP_API2;

export const fetchData = async (query) => {
    try {
        const response = await fetch(`${api}?q=${query}&appid=${token}&lang=es`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err)
        
    }
}

export const fetchData2 = async (lat, lon) => {
    try {
        const response = await fetch(`${api2}?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=${token}&lang=es`);
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

  

