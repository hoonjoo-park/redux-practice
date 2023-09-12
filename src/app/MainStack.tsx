import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import TabStack from './TabStack';

export const Main = createStackNavigator();

const MainStack = () => {
  return (
    <Main.Navigator
      initialRouteName="TabStack"
      screenOptions={{headerShown: false}}>
      <Main.Screen name="TabStack" component={TabStack} />
      <Main.Screen name="Home" component={Home} />
    </Main.Navigator>
  );
};

export default MainStack;
