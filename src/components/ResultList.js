import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetail from './ResultsDetail';


const ResultList = ({title, results, navigation}) => {

    if(!results.length){
        return null;
    }
    return (
        <View style = {styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(results) => results.id}
                renderItem={({ item }) => {
                    // return <Text>{item.name}</Text>
                    return (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('ResultShow', {id : item.id}) }>
                            <ResultDetail result={item}/>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>

    );

};

const styles =  StyleSheet.create({
    title: {
        fontSize : 18,
        fontWeight : 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container : {
        marginBottom : 10
    }
});

export default withNavigation(ResultList);