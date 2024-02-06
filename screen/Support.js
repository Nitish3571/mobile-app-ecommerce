import { View, Text, FlatList , Pressable , Image , TouchableOpacity} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

const Support = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <View>
      <FlatList 
        numColumns={2}
        data={cart}
        renderItem={({ item }) => 
        <View
        style={{
          margin: 10,
          flex: 1,
          flexDirection: "row",
          maxWidth:'auto',
          // padding: 30,
          marginRight: 50,
          paddingBottom: 10,
          alignItems:'center',
        }}
      >
        <Image
          source={{ uri: item.product.images[0] }}
          style={{ height: 100, width: 100 }}
        />
        
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 18 }}>
            {item.product.title}
          </Text>
          <Text style={{ fontSize: 18 }}>Brand : {item.product.brand}</Text>

          <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => decreaseQuantity()}>
            <AntDesign name="downcircleo" size={20} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, paddingHorizontal: 20 }}>
            {item.quantity}
          </Text>
          <TouchableOpacity onPress={() => increaseQuantity()}>
            <AntDesign name="upcircleo" size={20} color="black" />
          </TouchableOpacity>
        </View>
        </View>

        <Ionicons name="trash" size={30} color="black" />
      </View>
      
      } // Use item directly
      />
    </View>
  )
}

export default Support