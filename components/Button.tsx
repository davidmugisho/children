import React from 'react';

import { StyleSheet, View , Pressable, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {FontAwesome} from '@expo/vector-icons'

type Propos = {
    label: string;
    theme? : "primary"
}; 


export default function Button({ label , theme} : Propos) {
    if(theme === 'primary'){
    return(
        <View style={[styles.buttonContainer , {borderWidth: 4, borderColor:'#ffd33db', borderRadius: 18, }]}>
            <Pressable style={styles.button}
            onPress={() => alert("you press a  button") }>
                <FontAwesome
                // name="picture-0"
                size={18}
                color="#25292e"
                style={styles.buttonIcon}
                />
                <Text style={[styles.buttonLabel ,{color:"#25292e"}]}>{label}</Text>
            </Pressable>
        </View>
    ) 

}
}
const styles = StyleSheet.create({
    buttonContainer :{
        width:320,
        height: 68, 
        justifyContent: "center",
        alignItems: "center", 
        padding : 3,
        marginHorizontal: 20, 
    },
    button:{
        borderRadius : 10,
        width: '100%',
        height: '100%',
        alignItems : 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: "#fff",
        fontSize:16,

    },
    buttonIcon :{
        paddingRight: 8,
    }
})