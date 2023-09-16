import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer as persistReducerCreator,
  persistStore,
} from 'redux-persist';

export type Store = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  version: 1,
  whitelist: ['profileState'],
  storage: AsyncStorage,
};
const persistReducer = persistReducerCreator<Store>(
  persistConfig,
  rootReducer as any,
);
const store = createStore(persistReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
