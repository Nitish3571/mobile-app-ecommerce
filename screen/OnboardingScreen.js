import { Image } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';


const OnboardingScreen = () => {
  const navigation = useNavigation();
  return(
    <Onboarding
      onDone={() => navigation.navigate('Login')}
      skipToPage={2}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/icon.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fe6e58',
          image: <Image source={require('../assets/splash.png')} />,
          title: 'The Title',
          subtitle: 'This is the subtitle that sumplements the title.',
        },
        {
          backgroundColor: '#999',
          image: <Image source={require('../assets/icon.png')} />,
          title: 'Triangle',
          subtitle: "Beautiful, isn't it?",
        },
      ]}
    />
  );

}

export default OnboardingScreen;