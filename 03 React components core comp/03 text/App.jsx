import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.redText}>Hi there</Text>
      <Text style={styles.redText}>I am</Text>
      <Text style={styles.redText}>Aditya</Text>
      
   
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redText:{
    color: 'white',
    fontSize:30,
    fontWeight: 'ultralight',
    fontStyle: 'italic',
    
    fontFamily: 'monospace ',
    textDecorationLine: 'underline',
    backgroundColor: 'green',
  }
 
});
