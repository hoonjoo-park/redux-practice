import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Result from '../screens/Result';
import MyProfile from '../screens/MyProfile';
import {Image, StyleSheet, Text} from 'react-native';
import Images from '../images';

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
        tabBarLabel: () => getTabBarLabel(route),
        tabBarIcon: () => getTabBarIcon(route),
      })}>
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="Result" component={Result} />
      <Tab.Screen name="MyProfile" component={MyProfile} />
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
