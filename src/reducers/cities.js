const cities = (state=[],action)=>{
    if (action.type === 'FETCH_CITIES') {
        return action.payload;
    } else {
        return state
    }
};

export default cities;



