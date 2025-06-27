/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  Linking,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Config from 'react-native-config';
import Svg, { Path } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const handleDeepLink = (event: any) => {
    console.log('Deep Link:', event.url);
  };

  useEffect(() => {
    Linking.addEventListener('url', handleDeepLink);
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text>{Config.ENV}</Text>
          <View
            style={{
              height: 50,
              width: 50,
            }}
          >
            <Svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </Svg>
          </View>

          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <NewAppScreen templateFileName="App.tsx" />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
