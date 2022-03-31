const api = { key: '715f20facf9985f34f0af3d161fa42fb',
url:`http://api.openweathermap.org/data/2.5/weather`
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


