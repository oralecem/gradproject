import React from 'react';
import {TouchableOpacity, Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

const Home = () => {
  const goToAbout = () => {
    Actions.about();
  };
  return (
    <>
      <TouchableOpacity style={{margin: 128}} onPress={goToAbout}>
        <Text>This is HOME!</Text>
      </TouchableOpacity>
      <Button
        onPress={() => {
          Actions.login();
        }}
        title="enter"
      />
    </>
  );
};
export default Home;
