import React from 'react';
import { View, Text, StyleSheet, FlatList, Platform, Button } from 'react-native';
import SignView from '../components/SignView';
import { CATEGORIES, SIGNS } from '../data/dummy-data';

const SignsScreen = props => {     
    const renderSignItem = itemData => {
        return(
            <SignView
                    title={itemData.item.title}
                    img={itemData.item.imagePath}                    
                    onSelect={ () =>{
                        props.navigation.navigate({
                            routeName: 'SignDetail',
                            params: {
                                title: itemData.item.title,
                                videoPath: itemData.item.videoPath,
                                points: itemData.item.points
                            } 
                        })
                    } }
            />
        );
    };

    const catId = props.navigation.getParam('categoryId'); 
    const signList = SIGNS.filter(sign => sign.categoryId.indexOf(catId) >= 0);

    return(       
        
            <FlatList data={signList} renderItem={renderSignItem} numColumns={2}/>         
        
    );
};

SignsScreen.navigationOptions = navigationData => {   
    const categoryId = navigationData.navigation.getParam('categoryId');    
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);
        
    return {
        headerTitle: selectedCategory.title        
    };
};

const styles = StyleSheet.create({
  screen:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default SignsScreen;