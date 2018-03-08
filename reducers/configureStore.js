import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import rootReducer from './index';

const persistConfig = {
  key: 'root',
  storage,
};
const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);
const addListener = createReduxBoundAddListener('root');

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(middleware));
  let persistor = persistStore(store);
  return { store, persistor, addListener };
};
