import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import useFriend from '../hooks/useFriend';

const Result = () => {
  const {friendCount} = useFriend();
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>내 친구 수</Text>

        <Text style={styles.value}>{`총 ${friendCount}명...!!`}</Text>
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
  value: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
  },
});

export default Result;
