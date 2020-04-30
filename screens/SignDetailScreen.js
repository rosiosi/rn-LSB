import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const SignDetailScreen = props => {  
    const video = props.navigation.getParam('videoPath');   

    return(               
        <View style={styles.screen}>
            <Image source={{uri: video}} style={styles.image} />               
        </View>               
    );
};

SignDetailScreen.navigationOptions = navigationData => {   
    const title = navigationData.navigation.getParam('title');    
            
    return {
        headerTitle: title       
    };
};

const styles = StyleSheet.create({
  screen:{
      flex:1,
      justifyContent:'center' 
  },
  image:{
    width: '100%',
    height: 200
  } 
} 
);

export default SignDetailScreen;