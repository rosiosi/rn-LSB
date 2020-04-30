import React from 'react';
import { TouchableOpacity, View, 
         Text,StyleSheet, Platform,
         TouchableNativeFeedback, ImageBackground} from 'react-native';
import Colors from '../constants/Colors'

const SignCategoryItems = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }
    return(
        <View style={styles.item}>
            <TouchableCmp onPress={ props.onSelect } >
                <View style={{...styles.container ,... {backgroundColor: Colors.accentColor}}} >
                    <ImageBackground source={{uri: props.img}} style={styles.image}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{props.title}</Text>
                    </View>                    
                </View>  
            </TouchableCmp>     
        </View>
    );
}

const styles = StyleSheet.create({
  item:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 13,
      height: 200      
  },
  container: {
        width: 300,         
        height: 200,     
        borderRadius:50,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 20},
        shadowRadius: 10,
        elevation: 3,
        overflow: 'hidden',
        justifyContent: 'space-around'        
    },
    textContainer:{
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 22        
    },
    image:{
        width: '100%',
        height: '90%'
    }
});

export default SignCategoryItems;