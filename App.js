import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView } from 'react-native';
import SplaceScreen from './screen/SplaceScreen';
import OnboardingScreen from './screen/OnboardingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer style={styles.container}>
      <SplaceScreen />
      {/* <Text>Welcome Rana Jee</Text> */}
      <StatusBar style="auto" /> 
    </NavigationContainer>
    </Provider>
    // <View style={styles.container}>
    //   <OnboardingScreen />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
