import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import Stopwatch from './components/Stop';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Text must be inside ext wrap

      </Text>
    <View><Stopwatch/></View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"50px",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
