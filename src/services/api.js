const key = 'e2aed9dec2404a56ab4131703222208';

const fechtData = async (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no
    `
    const response = await fetch(url)
    const json = await response.json()

    return json

    
}

export default fechtData