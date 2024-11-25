import {  View , StyleSheet} from "react-native";
import ImageViewer from "@/components/imageViewer";
import Button from "@/components/Button";

const PlaceHolderImage = require("../../assets/images/background-image.png")

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.imageContainer}>
      <ImageViewer imgSource={PlaceHolderImage}/>          
    </View>

      <View style={styles.footerContainer}>
        <Button label="chose a photo " theme="priimary"/>
        <Button label="chose a photo "/>

      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    backgroundColor:'#25292e'
  },

imageContainer : {
  flex: 1, 
},
footerContainer : {
  flex : 1 / 3,
  alignItems: 'center'
}
})
