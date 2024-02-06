import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import Location from '../components/LiveLocation'
import LiveLocation from '../components/LiveLocation'

const Support = () => {
  return (
    <View style={styles.container}>
      <Text>Support</Text>
      <LiveLocation />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   padding: 20,
    },
  //   paragraph: {
  //     fontSize: 18,
  //     textAlign: 'center',
  //   },
  });

  
export default Support