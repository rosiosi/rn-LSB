import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SignReviewScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Sign Review Screen!</Text>
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

export default SignReviewScreen;