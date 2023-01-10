import { StyleSheet, Dimensions} from "react-native";

const screenWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({

  container : {
    position: 'relative',
    backgroundColor: '#000',
    width: screenWidth,
    alignItems: 'center',

    marginTop: 20
  },
    tableHeader: {
      backgroundColor: '#fff',
      width: screenWidth/1.1,
      alignItems: 'center'
    },
  });
  
  export default styles;