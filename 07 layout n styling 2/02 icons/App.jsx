import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SvgUri } from 'react-native-svg';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!  <Icon name="rocket" style={{
      color: 'red',
      }}/></Text>
      <SvgUri
        width={100}
        height={100}
        uri="https://www.svgrepo.com/show/301425/browser-web-development.svg"/>
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
