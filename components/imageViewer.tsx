import React from 'react';

import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';

type Propos = {
    imgSource : string;
    selectedImage?: string;

}; 


export default function ImageViewer({ imgSource , selectedImage } : Propos) {
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

    return <Image source={imgSource} style={styles.image}/>
}
const styles = StyleSheet.create({
    image :{
        width:320,
        height: 440, 
        borderRadius : 18,         
    }
})