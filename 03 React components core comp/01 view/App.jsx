import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.redText}>Hi there</Text> */}
      
      <View style={styles.row}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
     </View>
     <View style={styles.row}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
     </View>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redText:{
    color: 'red',
    backgroundColor: 'blue',
  },
  box:{
    backgroundColor:"magenta",
    width:30,
    height:30,},
    row:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      gap: 10,

     }
});
