import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Checkout = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 1,
          elevation: 2,
          borderBottomWidth: 0.5,
          borderColor: "#ccc",
          backgroundColor: "#fff",
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            margin: 10,
            flex: 1,
            flexDirection: "row",
            padding: 30,
            marginRight: 50,
            paddingBottom: 10,
          }}
        >
          <Image
            source={{ uri: product.images[0] }}
            style={{ height: 100, width: 100 }}
          />
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 18 }}>
              fkdgldflkgkldfkoimkdm{product.title}{" "}
            </Text>
            <Text style={{ fontSize: 18 }}>Brand : {product.brand}</Text>
          </View>
        </View>
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
            {quantity}{" "}
          </Text>
          <TouchableOpacity onPress={() => increaseQuantity()}>
            <AntDesign name="upcircleo" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "green",
          height: 50,
          borderRadius: 20,
          marginHorizontal: 10,
          marginTop: 10,
        }}
        onPress={() =>
          navigation.navigate("checkout", {
            product: product,
          })
        }
      >
        <Text style={{ fontSize: 20 }}>checkout</Text>
        <Text style={{ fontSize: 20 }}>₹ {product.price}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Checkout;
