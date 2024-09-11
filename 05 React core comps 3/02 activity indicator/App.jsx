import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ActivityIndicator, View,TouchableWithoutFeedback } from 'react-native';
import React from "react"
export default function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  },[])
  return (
    <View style={styles.container}>
     
        {loading ? 
        <ActivityIndicator size="large" color="#0000ff" />
        :
         <Text>Data fetched successfully</Text>}
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
