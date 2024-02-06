import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  Modal,
} from "react-native";
import React , {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CardReducer";
import LiveLocation from "../components/LiveLocation";
import { TextInput } from "react-native-gesture-handler";

const AddToCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log(cart);
  const [selectedRadio , setSelectedRadio] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible); 
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <ScrollView style={{ flex: 1 }}>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View
            style={{
              margin: 10,
              flex: 1,
              flexDirection: "row",
              maxWidth: "auto",
              width: "95%",
              padding: 10,
              justifyContent: "space-around",
              alignItems: "center",
              marginRight: 50,
              paddingBottom: 10,
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
            <Image
              source={{ uri: item.images[0] }}
              style={{ height: 100, width: 100 }}
            />

            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontSize: 16 }}>{splitTitle(item.title)}</Text>
              <Text style={{ fontSize: 16 }}>Brand : {item.brand}</Text>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  onPress={() => dispatch(decrementQuantity(item))}
                >
                  <AntDesign name="minuscircleo" size={20} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, paddingHorizontal: 20 }}>
                  {item.quantity}
                </Text>
                <TouchableOpacity
                  onPress={() => dispatch(incrementQuantity(item))}
                >
                  <AntDesign name="pluscircleo" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))}>
              <Ionicons name="trash" size={30} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={{marginVertical:10,backgroundColor:'#fff' , paddingVertical:20, marginBottom:0}}>
        <Text style={{marginLeft:10,fontSize:20,fontWeight:500 , paddingVertical:5}} >Delivery Address </Text>
        <View style={{marginHorizontal:10,backgroundColor:'#fff' , flexDirection:'row' , alignItems:'center' , justifyContent:'space-between'}}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {
                selectedRadio ? <View style={styles.radioBg}></View> : null
            }
          </View>
        <LiveLocation />
        </View>
      <TouchableOpacity style={{marginHorizontal:10 }} onPress={toggleModal}>
        <Text style={{ color:'orange' , fontSize:16 }}>change</Text>
        <LocationModal isVisible={isModalVisible} toggleModal={toggleModal} />
      </TouchableOpacity>
        </View>
      </View>

      <View style={{ padding: 10 }}> 
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Total Amount: ₹{totalAmount.toFixed(2)}
        </Text>
      </View>
    </ScrollView>
  );
};

const LocationModal = ({ isVisible, toggleModal }) => {
  return (
    <Modal visible={isVisible} swipeDirection={['down']} onSwipeComplete={toggleModal} onRequestClose={toggleModal}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello!</Text>
        <Button title="Hide modal" onPress={toggleModal} />
      </View>
    </Modal>
  );
};
const splitTitle = (title) => {
  const maxCharsPerLine = 20;
  let result = "";

  for (let i = 0; i < title.length; i += maxCharsPerLine) {
    const line = title.substring(i, i + maxCharsPerLine);
    result += `${line}\n`;
  }

  return result.trim();
};

const styles = StyleSheet.create({
  radioText: {
    fontSize: 20,
  },
  radio: {
    height: 20,
    width: 20,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    marginRight:20,
  },
  radioWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioBg: {
    backgroundColor: "#000",
    height: 14,
    width: 14,
    borderRadius: 12,
    margin: 0.8,
  },

});
export default AddToCart;
