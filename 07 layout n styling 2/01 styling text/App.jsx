import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 30,
        color: 'red',
        textDecorationLine: 'line-through',
        textDecorationColor: 'blue',
        textDecorationStyle: 'dotted',
        textTransform: 'capitalize',
        textShadowColor: 'black',
        textShadowOffset: {width: 0, height: 10},
        textShadowRadius: 20,
        lineHeight: 50,
      }}>See the styles on this text</Text>
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
  },
});
