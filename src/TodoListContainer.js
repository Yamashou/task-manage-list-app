import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import Config from 'react-native-config'
import TodoList from './components/TodoList';
export default class TodoListContainer extends Component {
  componentWillMount(){
    fetch('YOUR_IP')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        data : responseJson.recode
      })
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      data:[]
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          style={styles.base}
        >
          <TodoList
            todos={this.state.data}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#EEEEEE',
    marginTop: 20
  }
});
