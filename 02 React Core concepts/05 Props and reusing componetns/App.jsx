import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Wall from './Wall';

export default function App() {
    const name = "my-name";
    let obj1 = {
        name:name
    };
    let obj2={
        name
    };

   const exp = false
  return (
    <View style={styles.container}>
        <Wall data={"hi there bro"} color='green'/>
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
