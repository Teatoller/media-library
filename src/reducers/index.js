import { combineReducers } from 'redux';
import images from '/imageReducer';
import videos from './videoReducer';

// Combine all reducersto a single reducer function
const rootReducer = combineReducers({
    images,
    videos
});

export default rootReducer;
