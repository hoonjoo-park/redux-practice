import {createStackNavigator} from '@react-navigation/stack';

const Root = createStackNavigator();

import React from 'react';
import MainStack from './MainStack';
import {NavigationContainer} from '@react-navigation/native';

const RootStack = () => {
  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Root.Screen name="MainStack" component={MainStack} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
