import {createStackNavigator} from '@react-navigation/stack';

const Root = createStackNavigator();

import React from 'react';
import MainStack from './MainStack';

const RootStack = () => {
  return (
    <Root.Navigator>
      <Root.Screen name="MainStack" component={MainStack} />
    </Root.Navigator>
  );
};

export default RootStack;
