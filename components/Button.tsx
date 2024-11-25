import React from 'react';

import { StyleSheet, View , Pressable, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {FontAwesome} from '@expo/vector-icons'

type Propos = {
    label: string;
    onPress?:  () => void;
};

export default function Button({ label , onPress } : Propos) {
    return(
        <View style={styles.buttonContainer }>
            <Pressable style={styles.button}
            onPress={onPress}>
               
                <Text style={styles.buttonLabel }>{label}</Text>
            </Pressable>
        </View>
    ) 

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