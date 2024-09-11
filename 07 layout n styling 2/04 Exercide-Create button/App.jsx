import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import img from './assets/favicon.png';
import AnimatedButton from './Button';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width: "80%", height: 500,}}>
        <AnimatedButton  title='Getting Started!'  />
      </View>
   
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
