import { fork } from 'redux-saga/effects';
import watchSearchMedia from './watcher';

// Here, we register our watcher saga and export as a single generator
// function (startForman) as our root Saga
export default function* startForman() {
    yield fork(watchSearchMedia);
}
