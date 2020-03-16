import React, {Component} from 'react';
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {StatusBar} from 'react-native';
import styles from './Style';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerStyle: {display: 'none'},
    headerLeft: null,
  };
  componentDidMount() {
    StatusBar.setHidden(false);
  }
  render() {
    return (
      <View style={styles.centerColumnAligment}>
        <Text style={styles.loginText}>Login</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={text1 => this.setState({text1})}
          value={this.state.text1}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={text2 => this.setState({text2})}
          value={this.state.text2}
        />
        <Button
          style={styles.buttonstyle}
          onPress={() => {
            Actions.home();
          }}
          title="enter"
        />
        <Text>Don't have an account? Sign up here.</Text>
      </View>
    );
  }
}

export default Login;
