import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button,Alert, Text, ActivityIndicator, View,TouchableWithoutFeedback } from 'react-native';
import React from "react"
export default function App() {


  return (
    <View style={styles.container}>
     <StatusBar style="auto" backgroundColor='pink' hidden={false} />
    <Text>Status bar exmaple</Text>
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
