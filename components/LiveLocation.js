import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'; // Import ActivityIndicator
import * as Location from 'expo-location';
import axios from 'axios';

const LiveLocation = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 10 },
        newLocation => {
          setLocation(newLocation);
          fetchAddress(newLocation.coords.latitude, newLocation.coords.longitude);
        }
      );
    })();
  }, []);

  const fetchAddress = async (latitude, longitude) => {
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      const response = await axios.get(url);
      const data = response.data;
      setAddress({
        flatNo: data.address.flatNo ?? '',
        roomNo: data.address.roomNo ?? '',
        nearestArea: data.address.nearestArea ?? '',
        village: data.address.village ?? '',
        district: data.address.county ?? 'N/A',
        state: data.address.state ?? 'N/A',
        pincode: data.address.postcode ?? 'N/A',
        
      });
      setLoading(false); // Set loading to false after fetching address
    } catch (error) {
      console.error(error);
    }
  };

  let text = 'Waiting for location..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`;
  }

  return (
    <View style={styles.container}>
      {loading ? ( // Conditionally render loader if loading is true
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        address && (
          <View style={styles.addressContainer}>
            <Text style={styles.addressText}>{address.flatNo || address.roomNo}{address.roomNo} {address.nearestArea} {address.village} {address.district} </Text>
            <Text style={styles.addressText}>{address.state} - {address.pincode} {address.county}</Text>
            {/* <Text style={styles.addressText}>State: {address.state}</Text>
            <Text style={styles.addressText}>Pincode: {address.pincode}</Text> */}
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // addressContainer: {
  //   marginTop: 20,
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   padding: 10,
  //   width: '100%',
  // },
  // addressText: {
  //   fontSize: 16,
  //   marginBottom: 5,
  // },
});

export default LiveLocation;
