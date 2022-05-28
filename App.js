import React , {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import WheelOfFortune from 'react-native-wheel-of-fortune'
import bg from './Components/img/food.jpg';
import knob from './Components/img/knob.png'

const App = () => {

  const [ winnerValue , setWinnerValue] = useState('');
  const [ winnerIndex , setWinnerIndex] = useState('');
  const [ started , setStarted] = useState(false);

  const participants = [
    '?',
    '??',
    '?',
    '???',
    '?',
    '?',
    '???',
    '?',
    '??'
  ];

  const food = [
    'ต้มยำกุ้ง',
    'หมูไข่พะโล้',
    'แกงส้ม',
    'ผัดกะเพราไก่',
    'ก๋วยเตี๋ยว',
    'ยำวุ้นเส้น',
    'หอยทอด',
    'ปลาราดพริก',
    'ไก่ทอด',
  ]

  const wheelOptions = {
    rewards: participants,
    knobSize: 20,
    borderWidth: 2,
    borderColor: '#fff',
    innerRadius: 50,
    duration: 4000,
    backgroundColor: 'transparent',
    textAngle: 'horizontal',
    knobSource: knob,
    onRef: ref => (child = ref),
  };

  buttonPress = () => {

    setStarted(true)
    child._onPress();

  };

  buttonTry = () => {

    setWinnerIndex(null)
    child._tryAgain();

  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={bg} resizeMode="cover" style={{ flex: 1 }} blurRadius={5} >
      <StatusBar barStyle={'light-content'} />
        <Text style={{ marginTop: '10%', textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#fff' }} >
          What's good for this meal?
        </Text>

        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#fff' }} >
          {food[winnerIndex]}
        </Text>

        <View style={{ width: '90%', height: '60%', alignSelf: 'center', marginTop: '1%'}}>

          <WheelOfFortune
            style={{width : '50%'}}
            options={wheelOptions}
            getWinner={(value, index) => {

              setWinnerValue(value)
              setWinnerIndex(index)
              
            }}
          />

        </View>

        <TouchableOpacity
          style={{
            width: '80%',
            height: '8%',
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: '10%',
            alignSelf: 'center',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,
            elevation: 2,
            borderRadius: 15

          }}

          onPress={!started ? () => buttonPress() : () => buttonTry()}

        >
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: '6%', textAlign: 'center' }}>
            {!started ? 'Spin' : 'Try again'}
          </Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
};

export default App;