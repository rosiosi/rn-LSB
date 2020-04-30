import React from 'react';
import {StyleSheet,  FlatList} from 'react-native';
import SignCategoryItems from '../components/SignCategoryItems';

import {CATEGORIES} from '../data/dummy-data';

const SignCategoryScreen = props => {    
    const renderGridItem = (itemData) => {
        return (
            <SignCategoryItems 
                    title={itemData.item.title}
                    img={itemData.item.imageUrl}
                    onSelect={ () =>{
                        props.navigation.navigate({
                            routeName: 'Signs',
                            params: {
                                categoryId: itemData.item.id
                            } 
                        })
                    } }
            />
        )
    }

    return(     
        <FlatList 
        data={CATEGORIES} 
        renderItem={renderGridItem} />
    );
};

SignCategoryScreen.navigationOptions = {
    headerTitle: 'Señas Bolivia'   
}




export default SignCategoryScreen;