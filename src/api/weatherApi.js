import * as axios from "axios";

const weather = axios.create({
    withCredentials: true,
    baseURL: 'https://api.weatherbit.io/v2.0/current',
    headers: {
        'API-KEY': '8fbe7467cabc447e9af7be70004e4bcf'
    }
});

export const weatherApi = {

    getWeather(defaultLang = 'ru') {
        return weather.get(`lang=${defaultLang}?city=Raleigh,NC`)
            .then(response => {
                return response.data
            })
    }

}

