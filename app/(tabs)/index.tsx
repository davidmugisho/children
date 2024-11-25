import {  View , StyleSheet} from "react-native";
import ImageViewer from "@/components/imageViewer";
import Button from "@/components/Button";

import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

const PlaceHolderImage = require("../../assets/images/background-image.png")

export default function Index() {

  const [selectedImage, setSelectedImage ] = useState<string | undefined> (undefined);

  const PickImageASync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1, 
    }); 

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    }
    else{
      alert("you did not select any image"); 
    }
  }
  return (
    <View
      style={styles.container}
    >
      <View style={styles.imageContainer}>
      <ImageViewer imgSource={selectedImage || PlaceHolderImage}/>          
    </View>

      <View style={styles.footerContainer}>
        <Button  theme="primary"
        onPress={PickImageASync}
        label="chose a photo " />
        <Button label="use this  photo "/>

      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    backgroundColor:'#141718'
  },

imageContainer : {
  flex: 1, 
},
footerContainer : {
  flex : 1 / 3,
  alignItems: 'center'
}
})
