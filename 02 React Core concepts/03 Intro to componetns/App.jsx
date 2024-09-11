import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Wall from './Wall';
import Ceil from './Ceil';
import Floor from './Floor';

export default function App() {
  const question = 'What is your name?';
  const name = 'John Doe';
  const greeting = `Hello, ${name}! ${question}`;

  // null , undefined, boolean dont' show up in the output
  const exp = false
  return (
    <View style={styles.container}>
      <Wall/><Floor/><Ceil/>
      <Text>{greeting}</Text>
      <Text>{"After this line there is bnr a boolean"}{exp}{"Before this line there is a boolean"}</Text>
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
