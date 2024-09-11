import { Button, SafeAreaView, SafeAreaViewBase, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Uncomment the Text component */}
      {/* <Text style={styles.color}>hi</Text> */}
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    display:"flex",
    flexDirection:"row",
    // flex: 1, // Ensure SafeAreaView takes full screen
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  color: {
    color: 'white',
    fontSize: 16,
    fontWeight: '200', // 'ultralight' is not a valid option, using '200' as light equivalent
    fontStyle: 'italic',
    fontFamily: 'monospace',
    textDecorationLine: 'underline',
    backgroundColor: 'green',
  },
  box1: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    margin: 10, // Adds some spacing between boxes
  },
  box2: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    margin: 10, // Adds some spacing between boxes
  },
});
