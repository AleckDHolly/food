import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchAPI = async () => {
    try{
    const response = await yelp.get("/search", {
      params: {
        limit: 25,
        term: term, //can also do "term," since term is term
        location: "san jose"
      }
    });
    setResults(response.data.businesses)
  } catch(err) {
    setErrorMessage("Something went wrong, try again later!")
  }
  };

  return (
    <View style={{flex: 1, backgroundColor: "#fff"}}>
      <SearchBar term={term} onTermChange={setTerm}
      onTermSubmit={searchAPI}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
