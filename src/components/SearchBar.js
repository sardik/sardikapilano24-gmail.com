import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (
    <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle}/>
        <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder="search" 
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
        {/* <Text>Search Bar</Text> */}
    </View>
    );
};


const styles = StyleSheet.create({
    backgroundStyle : {
        marginTop : 15,
        backgroundColor : '#F0EEEE',
        height : 50,
        borderRadius : 5,
        marginHorizontal : 15,
        flexDirection: 'row'

    },
    inputStyle:{
        // borderColor : 'black',
        // borderWidth : 1,
        fontSize: 18,
        flex: 1
    },
    iconStyle :{
        fontSize : 35,
        alignSelf: 'center',
        marginHorizontal : 1
    }
});
    

export default SearchBar;