import { View, Text, SafeAreaView, StatusBar, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1,marginTop:50}}>
      <StatusBar backgroundColor={'black'} />
      <View  style={{flex:2 , backgroundColor:'#f4f4f4' , justifyContent:'center' ,alignItems:'center'}}>

      <Text>Home Page </Text>
      <Button title='Go to Shop' onPress={() => navigation.navigate("Shop")}/>
      </View>
      <Button  title='Add to cart' onPress={()=>navigation.navigate("add to cart")} />
    </SafeAreaView>
  )
}

export default Home