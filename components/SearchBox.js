import { View, Text, TextInput, StyleSheet , TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';


const SearchBox = () => {
  return (
    // <SafeAreaView style={styles.searchContainer}>
      <View style={styles.searchContainer}>
      <TextInput placeholder='search' style={styles.search} />
      <TouchableOpacity>
      <Ionicons name="search" size={30} color="black" />
      </TouchableOpacity>
      </View>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    searchContainer:{
        marginTop:50,
        // flex:1,
        flexDirection:'row',
        justifyContent:'center',
        // alignContent:'center'
        alignItems:'center',
    },
    search:{
        height:40,
        width:'80%',
        borderWidth:1,
        borderRadius:10,
        paddingLeft:10,
    }
})

export default SearchBox