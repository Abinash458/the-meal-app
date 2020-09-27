import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from "../components/CategoryGridTile";
import CustomHeaderButton from "../components/CustomHeaderButton"

const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate('CategoryMeals', { categoryId: itemData.item.id })
                }}
            />
        );
    }
    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
        />
    );
};

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Menu' iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        )
    };
}

const styles = StyleSheet.create({});

export default CategoriesScreen;
