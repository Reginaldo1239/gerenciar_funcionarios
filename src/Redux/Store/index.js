import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import RootReducer from '../Reducers';

const initialState = {};
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, RootReducer)
export const store= createStore(persistedReducer);
export const persistor = persistStore(store, [persistConfig])
