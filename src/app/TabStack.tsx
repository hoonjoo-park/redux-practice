import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Result from '../screens/Result';
import MyProfile from '../screens/MyProfile';
import {Image, StyleSheet, Text} from 'react-native';
import Images from '../images';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  const getTabBarIcon = (route: any) => {
    switch (route.name) {
      case 'HomeTab':
        return <Image source={Images.homeIcon} style={styles.tabBarIcon} />;
      case 'Result':
        return <Image source={Images.resultIcon} style={styles.tabBarIcon} />;
      case 'MyProfile':
        return <Image source={Images.profileIcon} style={styles.tabBarIcon} />;
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: () => getTabBarIcon(route),
      })}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#30A9DE' : '#000'}}>홈</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Result"
        component={Result}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#30A9DE' : '#000'}}>결과</Text>
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#30A9DE' : '#000'}}>프로필</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 15,
    height: 15,
  },
});

export default TabStack;
