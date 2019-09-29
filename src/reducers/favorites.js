const _ = require('lodash');

const favorites = (state=[],action)=>{
    switch(action.type){
        case 'ADD_FAVORITE':
            const afterAdded = _.cloneDeep(state);
            afterAdded.push(action.payload);
            return afterAdded;
        case 'REMOVE_FAVORITE':
            const afterRemoved = _.cloneDeep(state);
            const index = _.findIndex(afterRemoved, (c=>c.cityMetadata.id === action.payload));
            afterRemoved.splice(index,1);
            return afterRemoved;
        default:
            return state
    }
};

export default favorites;


