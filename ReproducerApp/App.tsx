/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.topView}>
        <Text>I SHOULD BE ON TOP</Text>
      </View>
      <View style={styles.bottomView}>
        <Text>I SHOULD BE BEHIND</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topView: {
    height: 20,
    backgroundColor: 'red',
    marginBottom: -10,
    zIndex: 1,
  },
  bottomView: {
    height: 20,
    backgroundColor: 'pink',
  },
});

export default App;
