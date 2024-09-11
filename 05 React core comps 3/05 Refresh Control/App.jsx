import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button,Alert,RefreshControl,ScrollView, Text, ActivityIndicator, View,TouchableWithoutFeedback } from 'react-native';
import React from "react"
export default function App() {
  const [refreshing,setRefreshing] = React.useState(false);
  const onRefresh = ()=>{
    setRefreshing(true);
    setTimeout(()=>{
      setRefreshing(false);
    },2000)
  }
  return (
    <View style={styles.container}>
     <ScrollView 
    refreshControl={<RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      title="pull to refresh"
      titleColor="red"
      tintColor="red"
      />}
     >
    <Text>Scrollable content here</Text>
     </ScrollView>
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
