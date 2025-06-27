/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Config from 'react-native-config';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: 50,
          alignItems: 'center',
        }}
      >
        {Config.ENV}
      </Text>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NewAppScreen templateFileName="App.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
