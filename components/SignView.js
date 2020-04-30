import React from 'react';
import { TouchableOpacity, View, 
         Text,StyleSheet, Platform,
         TouchableNativeFeedback, ImageBackground} from 'react-native';
import Colors from '../constants/Colors'

const SignView = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }
    return(
        <View style={styles.item}>
            <TouchableCmp  onPress={ props.onSelect }>
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
      margin: 15,
      height: 150
  },
  container: {    
        flex:1,           
        borderRadius:10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 20},
        shadowRadius: 10,
        elevation: 3,
        padding: 10
    },
    textContainer:{    
        flex:1,    
        alignItems: 'center',
        justifyContent: 'center'       
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 20        
    },
    image:{
        width: '100%',
        height: '90%'
    }
});

export default SignView;