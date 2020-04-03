import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
    <>
        <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}

        />
        {/* <Text>Search Screen</Text> */}
        {/* <Text>{term}</Text> */}
        {errorMessage? <Text>{errorMessage}</Text>: null}
        {/* <Text>we found {results.length} results</Text> */}
        <ScrollView>
            <ResultList 
                results={filterResultsByPrice('$')} 
                title="Cost Effective" 
            />
            <ResultList 
                results={filterResultsByPrice('$$')} 
                title="Bit Pricier"
                />
            <ResultList 
                results={filterResultsByPrice('$$$')} 
                title="Big Spender"
                />
        </ScrollView>
    </>
    );
};


const styles = StyleSheet.create({});


export default SearchScreen;