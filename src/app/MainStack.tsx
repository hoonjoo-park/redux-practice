import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';

export const Main = createStackNavigator();

const MainStack = () => {
  return (
    <Main.Navigator>
      <Main.Screen name="Home" component={Home} />
    </Main.Navigator>
  );
};

export default MainStack;
