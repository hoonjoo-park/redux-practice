import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TabStack from './TabStack';

export const Main = createStackNavigator();

const MainStack = () => {
  return (
    <Main.Navigator
      initialRouteName="TabStack"
      screenOptions={{headerShown: false}}>
      <Main.Screen name="TabStack" component={TabStack} />
    </Main.Navigator>
  );
};

export default MainStack;
