import {
  Button,
  SafeAreaView,
  SafeAreaViewBase,
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import img from "./assets/toy.webp";
import loadImg from "./assets/loading.jpg";
export default function App() {
  return (

     
    <View style={styles.container}>

    {/* default value of activeOpacity is  0.85 */}
      <TouchableHighlight style={styles.button} underlayColor={"lightblue"} activeOpacity={0.2} onPress={()=>{
        console.log("I was clicked")
      }}>

      <View style={styles.banner}>
        <Text>Click Me</Text>
      </View>

      </TouchableHighlight>

    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    resizeMode:"contain",
    alignItems: "center",
  },
  banner:{
    // backgroundColor: "lightblue",
    padding: 10, 
    marginHorizontal: 10,
    borderRadius: 10,
    width: "95%",
  },
  img: {
    // width: 50,
    // height: 50,
    // borderRadius: 50,
    height:"100vh",
    width:"100%",
  },
  button: {
    backgroundColor: "lightgreen",
    borderRadius: 10,
    padding: 10,
    
  }
});
