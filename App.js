/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import withCounter from './src/hoc/withCounter';
import withWelcome from './src/hoc/withWelcome';

class App extends Component {
  render() {
    const { count, welcome: { welcomeText }, counterIncrementAction, counterDecrementAction, createWelcomeAction } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.counterTitle}>Counter</Text>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={counterIncrementAction}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.buttonText}>{count}</Text>
          <TouchableOpacity onPress={() => { counterDecrementAction }}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.buttonText}>{welcomeText}</Text>
        <Button title={'Button 1'} onPress={() => { createWelcomeAction('Button 1 pressed') }}></Button>
        <Button title={'Button 2'} onPress={() => { createWelcomeAction('Button 2 pressed') }}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  counterTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  counterContainer: {
    flexDirection: 'row',

  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 20,
    marginRight: 20
  }
})

export default withWelcome(withCounter(App));