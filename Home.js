import React, {Component} from 'react';
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    return fetch('http://127.0.0.1:8081/time')
      .then(res => res.json())
      .then(data => {
        this.setState(
          {
            isLoading: false,
            dataSource: data.time,
          },
          function() {},
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>The current time is {this.state.dataSource}.</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Enter username!"
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}

export default Home;
