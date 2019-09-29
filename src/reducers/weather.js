const cityWeatherData = (state={firstMount:true},action)=>{
    switch(action.type){
        case 'GET_CITY_WEATHER':
            state.firstMount = false;
            return {...state,...action.payload};
        default:
            return state
    }
};

export default cityWeatherData;


