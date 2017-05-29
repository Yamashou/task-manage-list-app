import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import TodoListContainer from './src/TodoListContainer';

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TodoListContainer />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
