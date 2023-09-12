import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Result from '../screens/Result';
import MyProfile from '../screens/MyProfile';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="Result" component={Result} />
      <Tab.Screen name="MyProfile" component={MyProfile} />
    </Tab.Navigator>
  );
};

export default TabStack;
