import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={{flex:1,marginTop:50}}>
      <StatusBar backgroundColor={'black'} />
      <Text>Home Page </Text>
    </SafeAreaView>
  )
}

export default Home