import {combineReducers} from 'redux';
import bulbReducer from './BulbReducer';

const rootReducer = combineReducers({
    bulb: bulbReducer
});

export default rootReducer;