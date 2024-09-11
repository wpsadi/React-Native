import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log('Button pressed');
  }
  return (
    <View style={styles.container}>
      {/* line braeks are added using "\n" */}
    <Text style={styles.redText}>
      Lorem ipsum {"\n"}dolor sit amet consectetur adipisicing elit. Amet omnis eos eum quas laboriosam dicta error quo animi, consequuntur, deleniti, beatae reiciendis laudantium perspiciatis ipsum hic. Odio, saepe? Similique, enim facilis pariatur vero nemo cupiditate explicabo non eligendi quisquam odit debitis veritatis impedit ratione tempore deserunt! Maxime eaque aut ducimus similique et aliquid minima ad quasi consectetur illo. Temporibus consequuntur atque ad ullam, quaerat eligendi modi soluta aperiam id culpa ea nam in iure repellendus dolore quos voluptas aliquam animi veniam rem vero officia architecto. Repellat numquam nulla corrupti quia maiores reiciendis nobis placeat, ratione id expedita ipsum cum rerum?

    </Text>
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
    fontSize:16,
    fontWeight: 'ultralight',
    fontStyle: 'italic',
    
    fontFamily: 'monospace ',
    textDecorationLine: 'underline',
    backgroundColor: 'green',
  }
 
});
