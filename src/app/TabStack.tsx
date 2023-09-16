import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Result from '../screens/Result';
import MyProfile from '../screens/MyProfile';
import {Image, StyleSheet, Text} from 'react-native';
import Images from '../images';

type BottomTabKey = 'HomeTab' | 'ResultTab' | 'MyProfileTab';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  const renderTabBar = useCallback((key: BottomTabKey, focused: boolean) => {
    const labelColor = {color: focused ? '#000' : '#999'};
    const label = (() => {
      switch (key) {
        case 'HomeTab':
          return '홈';
        case 'ResultTab':
          return '결과';
        case 'MyProfileTab':
          return '프로필';
      }
    })();

    return <Text style={labelColor}>{label}</Text>;
  }, []);

  const renderTabBarIcon = useCallback(
    (key: BottomTabKey, focused: boolean) => {
      const tintColor = focused ? '#000' : '#999';

      switch (key) {
        case 'HomeTab':
          return (
            <Image
              source={Images.homeIcon}
              style={styles.tabBarIcon}
              tintColor={tintColor}
            />
          );
        case 'ResultTab':
          return (
            <Image
              source={Images.resultIcon}
              style={styles.tabBarIcon}
              tintColor={tintColor}
            />
          );
        case 'MyProfileTab':
          return (
            <Image
              source={Images.profileIcon}
              style={styles.tabBarIcon}
              tintColor={tintColor}
            />
          );
      }
    },
    [],
  );

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarLabel: ({focused}) => renderTabBar('HomeTab', focused),
          tabBarIcon: ({focused}) => renderTabBarIcon('HomeTab', focused),
        }}
      />
      <Tab.Screen
        name="Result"
        component={Result}
        options={{
          tabBarLabel: ({focused}) => renderTabBar('ResultTab', focused),
          tabBarIcon: ({focused}) => renderTabBarIcon('ResultTab', focused),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          tabBarLabel: ({focused}) => renderTabBar('MyProfileTab', focused),
          tabBarIcon: ({focused}) => renderTabBarIcon('MyProfileTab', focused),
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
