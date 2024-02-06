import { View, Text , useEffect, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { addToCart } from '../redux/CardReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ProductInfo = ({ route}) => {
  const { product } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const addTocart = (item) =>{
    dispatch(addToCart(item))
  }

  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  return (
    <ScrollView>
      <Image source={{uri : product.images[0]}}  style={{height:300 , width:'100%'}}/>
      <View style={{marginLeft:10}}>
      <Text style={{fontSize:20 }}>{product.title}</Text>
      <Text style={{fontSize:25}}>Brand : {product.brand}</Text>

    {/* <View style={{flexDirection:'row' , justifyContent:'space-between' , marginRight:20 , alignItems:'flex-end'}}> */}
    <Text style={{fontSize:30 , marginTop:15 , marginBottom:10}}>₹ {product.price}</Text>
      <Text style={{color:'orange'}}>Rating: ⭐{product.rating}</Text>
    {/* </View> */}
      
      </View>
      <View style={{marginLeft:10 , marginTop:10}}>
        <Text style={{fontSize:20 }}>Details</Text>
        <Text>Stock - {product.stock}</Text>
        <Text>Brand - {product.brand}</Text>
        <Text>Category - {product.category}</Text>
      </View>
      <View style={{marginLeft:10 , marginTop:10}}>
        <Text style={{fontSize:20 }}>About This Item</Text>
        <Text>Stock - {product.description}</Text>
      </View>


      <TouchableOpacity style={{flexDirection:'row' , alignItems:'center' , justifyContent:'space-around' , backgroundColor:'green' , height:50 , borderRadius:20 , marginHorizontal:10 , marginTop:10}}
      // onPress={()=>navigation.navigate("checkout" , {
      //   product: product
      // })}
      onPress={()=>addTocart({product:product})}
      >
        <Text style={{fontSize:20}}>Add To Card</Text>
        <Text style={{fontSize:20}}>₹ {product.price}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductInfo;
