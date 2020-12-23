import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, defaultTheme, Provider } from '@adobe/react-spectrum'
import LandingPage from './components/LandingPage/LandingPage';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider theme={defaultTheme}>
<LandingPage />
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
