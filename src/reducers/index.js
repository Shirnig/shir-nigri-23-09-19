import {combineReducers} from 'redux';
import cities from "./cities";
import cityWeatherData from "./weather";
import favorites from "./favorites";


export default combineReducers({
    cities,
    cityWeatherData,
    favorites
})
