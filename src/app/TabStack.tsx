import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Result from '../screens/Result';
import MyProfile from '../screens/MyProfile';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  const getTabBarLabel = (route: any) => {
    switch (route.name) {
      case 'HomeTab':
        return <Text>홈</Text>;
      case 'Result':
        return <Text>결과</Text>;
      case 'MyProfile':
        return <Text>프로필</Text>;
    }
  };
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabel: () => getTabBarLabel(route),
      })}>
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="Result" component={Result} />
      <Tab.Screen name="MyProfile" component={MyProfile} />
    </Tab.Navigator>
  );
};

export default TabStack;
