import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const SignTestScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Sign test Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  screen:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default SignTestScreen;