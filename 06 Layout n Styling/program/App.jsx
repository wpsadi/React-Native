import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        borderWidth: 1,
        borderColor: 'red',
        padding: 10,
        margin: 10,
        borderRadius: 10,

        // adding shadow

        // for ios
        // shadowColor: 'black',
        // shadowOffset: {width: 0, height: 10},
        // shadowOpacity: 0.5,
        // shadowRadius: 10,

        // for android
        elevation: 20,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.5,

      }}>See the border, isn't it exciting!</Text>
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
    marginTop:40

  },
});
