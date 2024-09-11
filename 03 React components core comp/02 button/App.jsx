import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log('Button pressed');
  }
  return (
    <View style={styles.container}>
      
      <Button color={"red"}  title="hi there" onPress={handlePress}></Button>
 
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
