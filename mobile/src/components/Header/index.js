
import homeIcon from "./../assets/icons/home.png";
import archiveIcon from "./../assets/icons/archive.png";
import editIcon from "./../assets/icons/edit-icon.png";
import addIcon from "./../assets/icons/add.png";
import helpIcon from "./../assets/icons/help-circle.png";
import menuIcon from "./../assets/icons/menu.png";
import closeMenuIcon from "./../assets/icons/x.png"


import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native"
import MenuButton from "../Buttons/MenuButton";
import Logo from "../logo";
import React, { useState } from "react";
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height


export default function Header() {
  const [viewSidebar, setViewSidebar] = React.useState(true)
  
  return (
    <>
    {viewSidebar ? 
    <View style={header.container}>
      <TouchableOpacity
      onPress={(e) => {
        setViewSidebar(!viewSidebar)
        console.log(viewSidebar)
      }}
      style={header.closeMenu}
      >
        <Image
        style={{width: 15, height: 15}}
        source={closeMenuIcon}
      />
      </TouchableOpacity>
    <Logo/>
    <View style={header.headerNav}>
      <MenuButton
      title='Início'
      image={homeIcon}
      />
      <MenuButton 
      title='Estoque'
      image={archiveIcon}
      />
      <MenuButton 
      title='Novo Produto'
      image={addIcon}/>
      <MenuButton 
      title='Editar Produto'
      image={editIcon}
      />
    </View>
    </View> :

    <TouchableOpacity
    onPress={(e) => {
      setViewSidebar(!viewSidebar)
      console.log(viewSidebar)
    }}
    style={header.openMenu}
    >
      <Image
        source={menuIcon}
        style={{width: 15, height: 15}}
      />
    </TouchableOpacity>
    
  }
    </>
  );
}

const header = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: screenWidth/1.4,
    height: screenHeight,
    alignItems: 'flex-start',
  
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,

    position: 'absolute',
    zIndex: 1,
  },

  closeMenu: {
    backgroundColor: "#e9e9e9",
    width: 30,
    height: 30,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 45,

    marginLeft: 20,
    marginRight: 40,
    zIndex: 9231293,

    alignItems: 'center', 
    justifyContent: 'center'

  }, 

  openMenu: {
    backgroundColor: "#fff",
    width: 30,
    height: 30,
    marginLeft: 20,
    borderRadius: 50,

    alignItems: 'center',
    justifyContent: 'center'
  },

  text:{
    color: "#fff",
    fontSize: 16
  },

  headerNav: {
    paddingLeft: 20,
    alignItems: 'flex-start'
  },

  buttonIcon: {
  backgroundColor: '#fff',
  marginLeft: 20,
  }

});