import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer as configurePersistReducer,
  persistStore,
} from 'redux-persist';

export type Store = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  version: 1,
  whitelist: [],
  storage: AsyncStorage,
};
const persistReducer = configurePersistReducer<Store>(
  persistConfig,
  rootReducer,
);
const store = createStore(persistReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;