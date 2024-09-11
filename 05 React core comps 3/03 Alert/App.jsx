import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button,Alert, Text, ActivityIndicator, View,TouchableWithoutFeedback } from 'react-native';
import React from "react"
export default function App() {

  const handlePress= ()=>{
    Alert.alert("Are you sure?","This action is irreversible",[
      {text:"No",onPress:()=>console.log("No")},
      {text:"Yes",onPress:()=>console.log("Yes"),style:"destructive"}
    ])
    // console.log("Button pressed")
  }
  return (
    <View style={styles.container}>
     
       <Button title="Delete" onPress={handlePress}/>
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
