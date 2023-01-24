import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducer';

const { createStore } = require('redux');

const enhancer = devToolsEnhancer();

const store = createStore(rootReducer, enhancer);

export default store;
