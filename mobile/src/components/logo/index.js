import React from "react";

import { StyleSheet, View, Text } from "react-native";

export default function Logo(){
    return(
        <View>
            <Text style={logo.logoText}>Nome</Text>
        </View>
    )
}

const logo = StyleSheet.create({
    logoText: {
        fontSize: 30,
        marginBottom: 30
    }
})