import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import useProfile from '../hooks/useProfile';

const MyProfile = () => {
  const {profile} = useProfile();

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>내 프로필</Text>

        <Text style={styles.subTitle}>닉네임</Text>
        <Text style={styles.value}>{profile.nickname}</Text>

        <Text style={styles.subTitle}>MBTI</Text>
        <Text style={styles.value}>{profile.mbti}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 40,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 30,
  },
});

export default MyProfile;
