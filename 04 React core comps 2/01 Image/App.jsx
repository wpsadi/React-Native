import { Button, SafeAreaView, SafeAreaViewBase, ScrollView, StyleSheet, Text, View,Image } from 'react-native';
import img from "./assets/toy.webp";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Uncomment the Text component */}
    {/* <Image style={styles.img} source={img}/> */}
    <Image style={styles.img} source={{uri:"https://cdn.pixabay.com/photo/2023/05/06/12/17/music-7974197_1280.jpg"}}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container :{
    display:"flex",
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center'
  
  },
  img:{
    width:100,
    height:100,
    borderRadius:50
  }
 
});
