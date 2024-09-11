import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AnimatedCard from './Card';
import img from './assets/favicon.png';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width: "80%", height: 500,}}>
      <AnimatedCard subtitle='Explore the react native now!' title='Getting Started!' imageSource={img} content='curated just for u'/>
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
