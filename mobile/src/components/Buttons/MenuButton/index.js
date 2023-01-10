import React from "react";
import homeIcon from "./../../assets/icons/home.png"

import { StyleSheet, Dimensions, View, TouchableOpacity, Image, Text} from "react-native";

export default function MenuButton({title, image}){
    return(
        <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={buttonMenu.button}>
        <Image
         source={image}
         style={buttonMenu.buttonIcon}
         />
          <Text style={buttonMenu.text}>{title}</Text>
        </TouchableOpacity>
      </View>
    )
}

const buttonMenu = StyleSheet.create({
    text:{
      color: "#000",
      fontSize: 14,
      fontWeight: '500',
      marginLeft: 20
    },
  
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8
    },

    buttonIcon: {
      marginBottom: 5,
    }
  });