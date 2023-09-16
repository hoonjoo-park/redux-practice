import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = () => {
  const handlePressSaveNickname = () => {};

  const handlePressSaveMBTI = () => {};

  const handlePressPlusMinusButton = (key: 'plus' | 'minus') => {
    switch (key) {
      case 'plus':
        break;
      case 'minus':
        break;
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.scrollViewWrapper}>
        <View>
          <Text style={styles.sectionLabel}>닉네임</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="닉네임을 입력하세요"
              style={styles.textInputStyle}
            />
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handlePressSaveNickname}>
              <Text style={styles.buttonText}>저장</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.sectionLabel}>MBTI</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="MBTI를 입력하세요"
              style={styles.textInputStyle}
            />
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handlePressSaveMBTI}>
              <Text style={styles.buttonText}>저장</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.sectionLabel}>친구 수</Text>
          <View style={styles.inputContainer}>
            <TextInput
              defaultValue="0"
              keyboardType="number-pad"
              style={styles.textInputStyle}
            />
            <TouchableOpacity
              style={styles.plusMinusButton}
              onPress={() => handlePressPlusMinusButton('minus')}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.plusMinusButton}
              onPress={() => handlePressPlusMinusButton('plus')}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  scrollViewWrapper: {
    padding: 20,
  },
  sectionLabel: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 14,
    marginTop: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  textInputStyle: {
    height: 35,
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
  },
  saveButton: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: '#30A9DE',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  plusMinusButton: {
    height: 35,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: '#30A9DE',
  },
});

export default Home;
