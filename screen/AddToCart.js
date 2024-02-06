import { View, Text, FlatList , Pressable , Image , TouchableOpacity , ScrollView} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../redux/CardReducer';

const AddToCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log(cart);

  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  return (
    <ScrollView style={{flex:1,}}>
      <FlatList 
        data={cart}
        renderItem={({ item }) => 
        <View
        style={{
          margin: 10,
          flex: 1,
          flexDirection: "row",
          maxWidth:'auto',
          width:'95%',
          padding: 10,
          justifyContent:'space-around',
          alignItems:'center',
          marginRight: 50,
          paddingBottom: 10,
          alignItems:'center',
          backgroundColor:'#fff',
        }}
      >
        <Image
          source={{ uri: item.images[0] }}
          style={{ height: 100, width: 100 }}
        />
        
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 16 }}>
            {splitTitle(item.title)}
          </Text>
          <Text style={{ fontSize: 16 }}>Brand : {item.brand}</Text>

          <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => dispatch(decrementQuantity(item))}>
          <AntDesign name="minuscircleo" size={20} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, paddingHorizontal: 20 }}>
            {item.quantity}
          </Text>
          <TouchableOpacity onPress={() => dispatch(incrementQuantity(item))}>
          <AntDesign name="pluscircleo" size={20} color="black" />
          </TouchableOpacity>
        </View>
        </View>

        <TouchableOpacity onPress={()=>dispatch(removeFromCart(item.id))}>
        <Ionicons name="trash" size={30} color="black" />
        </TouchableOpacity>
      </View>
      
      } 
      />

<View style={{ padding: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total Amount: ₹{totalAmount.toFixed(2)}</Text>
      </View>
    </ScrollView>
  )
}
const splitTitle = (title) => {
  const maxCharsPerLine = 20;
  let result = '';

  for (let i = 0; i < title.length; i += maxCharsPerLine) {
    const line = title.substring(i, i + maxCharsPerLine);
    result += `${line}\n`;
  }

  return result.trim(); 
};

export default AddToCart