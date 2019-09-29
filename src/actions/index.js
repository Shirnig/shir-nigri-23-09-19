import axios from 'axios';
import {ToastsStore} from "react-toasts";


export const searchCity = (search) => {
    return dispatch => axios.get(`//dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=6QVjLvU53tFxcdljRE9f4nqehZhA2buf&q=${search}`).then(({data}) => {
        dispatch(CitiesData(data))
    }).catch(err => {ToastsStore.error("Something went wrong!")})
};

export const CitiesData = cities => {
    return {
        type: 'FETCH_CITIES',
        payload: cities
    }
};

export const getCityData = (cityMetadata) => {
    return async dispatch => {
        await Promise.all([getCurrentWeather(cityMetadata.id), getForecastWeather(cityMetadata.id)]).then(dataArray => {
            const cityData = {
                cityMetadata,
                currentWeather: dataArray[0].data[0],
                forecastWeather: dataArray[1].data.DailyForecasts
            };
            dispatch(CityWeatherData(cityData))
        }).catch(err => {ToastsStore.error("Something went wrong!")});

    }
};

const getCurrentWeather = async (id) => {
    return await axios.get(`//dataservice.accuweather.com/currentconditions/v1/${id}?apikey=6QVjLvU53tFxcdljRE9f4nqehZhA2buf`);
};


const getForecastWeather = async (id) => {
    return await axios.get(`//dataservice.accuweather.com/forecasts/v1/daily/5day/${id}?apikey=6QVjLvU53tFxcdljRE9f4nqehZhA2buf&metric=true`);
};

export const CityWeatherData = cityData => {
    return {
        type: 'GET_CITY_WEATHER',
        payload: cityData
    }
};

export const addFavorite = (city) => {
    return dispatch => dispatch(addFavoriteAction(city))
};

export const addFavoriteAction = city => {
    return {
        type: 'ADD_FAVORITE',
        payload: city
    }
};


export const removeFavorite = (id) => {
    return dispatch => dispatch(removeFavoriteAction(id))
};

export const removeFavoriteAction = id => {
    return {
        type: 'REMOVE_FAVORITE',
        payload: id
    }
};
