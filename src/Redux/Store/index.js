import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import RootReducer from '../Reducers';

const initialState = {};
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['Loading','Notification']
}


const persistedReducer = persistReducer(persistConfig, RootReducer)

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store, [persistConfig])
