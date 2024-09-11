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
} from "react-native";
import img from "./assets/toy.webp";
import loadImg from "./assets/loading.jpg";
export default function App() {
  return (

     
    <ImageBackground source={img} style={styles.container} loadingIndicatorSource={loadImg}>

      <View style={styles.banner}>
        <Text>My First React Native App</Text>
      </View>
      </ImageBackground>
  );
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
    backgroundColor: "lightblue",
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
});
