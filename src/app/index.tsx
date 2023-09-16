import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from '../configs/store';
import RootStack from './RootStack';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle={'dark-content'} backgroundColor="#fff" />
        <RootStack />
      </PersistGate>
    </Provider>
  );
}

export default App;
