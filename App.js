import React, {Component} from 'react';
import {FlatList, ActivityIndicator, Text, View} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    return fetch('http://127.0.0.1:5000/time')
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
        console.error('sdf');
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
      </View>
    );
  }
}
