import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Ionicons name="md-search" style={styles.iconStyle} />
      <TextInput placeholder="Search" style={styles.inputStyle} 
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
      autoCapitalize="none"
      autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 5,
    flexDirection: "row",
  },
  inputStyle: {
      flex: 1,
      fontSize: 20
  },
  iconStyle: {
      fontSize: 30,
      alignSelf: "center",
      marginHorizontal: 10
  }
});

export default SearchBar;
