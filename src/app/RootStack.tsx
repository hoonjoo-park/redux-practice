import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import MainStack from './MainStack';
import {dispatch} from '../utils';
import * as profileActions from '../actions/profile';

const Root = createStackNavigator();

const RootStack = () => {
  useEffect(() => {
    dispatch(profileActions.getProfile.request());
  }, []);

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
