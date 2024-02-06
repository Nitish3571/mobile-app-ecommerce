import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation();
  return (
    <View style={{flex:1,justifyContent:'center' , alignItems:'center'}}>
      <Text>Login</Text>
      <Button title='Home' onPress={()=>navigation.navigate("BottomNavigation")} />
    </View>
  )
}

export default Login