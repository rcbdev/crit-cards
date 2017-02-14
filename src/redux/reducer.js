import { combineReducers } from 'redux';
import critTypes from './modules/critTypes';
import effectHistory from './modules/effectHistory';

export default combineReducers({
    critTypes,
    effectHistory
});
