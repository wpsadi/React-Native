import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableWithoutFeedback } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={()=>console.log("clicked")}>
        <View style={styles.button}>
          <Text>Click Me</Text>
        </View>
        </TouchableWithoutFeedback>
      {/* <StatusBar style="auto" /> */}
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
