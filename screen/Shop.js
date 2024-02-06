import { View, Text, StatusBar, StyleSheet, FlatList, Pressable , ActivityIndicator, ScrollView  } from 'react-native';
import React, { useEffect, useState } from 'react';
import SearchBox from '../components/SearchBox';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { addToCart } from '../redux/CardReducer';
import { useDispatch } from 'react-redux';


const Shop = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    
  

  const getProduct = async () => {
    try {
      const url = 'https://dummyjson.com/products';
      const result = await fetch(url, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (result.ok) {
        const response = await result.json();
        const products = response.products;
        setProduct(products);
        
      } else {
        console.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const cart = useSelector((state) => state.cart.cart);
  // console.log(cart);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
 
  return (
    <View style={styles.container}>
     <SearchBox />
    <ProductItem />
    <FlatList 
        numColumns={2}
        data={product}
        renderItem={({ item }) => <ProductItem data={item} />} // Use item directly
    /> 
    </View>
  );
};


const ProductItem =(props)=>{
    const product = props.data;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const addTocart = (item) =>{
      dispatch(addToCart(item))
    } 
    if (!product) {
      // Handle the case when product is undefined
      return null;
    }
    return(
      <View style={styles.product}>
        <Pressable  onPress={()=>navigation.navigate("shop" , {
            product : product
        })}>
        <Image source={{ uri: product.images[0] }} style={{ height: 150, width: 150 , borderRadius:10 }} />
        </Pressable>
        <View style={{flexDirection:'row' , justifyContent:'space-evenly' , alignItems:'center' , top:10 , marginBottom:20}}>
        <View>
        <Text numberOfLines={2} ellipsizeMode="tail">
    {splitTitle(product.title)}
  </Text>
        <Text>₹ {product.price}</Text>
        <Text>⭐⭐⭐⭐</Text>
        </View>
        
        <View>
        <Pressable onPress={()=>addTocart({product:product})}>
        <Ionicons name="cart" size={30} color="black" />
        </Pressable>
        </View>
        </View>
     
     </View>
    )
}

const splitTitle = (title) => {
    const maxCharsPerLine = 10;
    let result = '';
  
    for (let i = 0; i < title.length; i += maxCharsPerLine) {
      const line = title.substring(i, i + maxCharsPerLine);
      result += `${line}\n`;
    }
  
    return result.trim(); 
  };
  

  
const styles = StyleSheet.create({
  loadingContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  },
    container:{
        flex:1,
    },
    product: {
        top: 20,
        margin: 10,
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        width: '45%',
        shadowColor: 'white', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.5, 
        shadowRadius: 5, 
        elevation: 20, 
        backgroundColor:'#fff',
      },
      
})

export default Shop;
