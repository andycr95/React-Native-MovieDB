import React, {
    Component
  } from 'react';
  import {
    View,
    Text,
    StyleSheet
  } from 'react-native';
  
  import style, { StackNavHeaderStyles } from '../styles/styles';
  
  export default class TvShows extends Component {
    static navigationOptions = {
      title: 'Movies',
      ...StackNavHeaderStyles,
    };

    render() {
      return (
          <View>
              <Text style={styles.container}>TV Shows</Text>
          </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      textAlign: 'center',
      top: 50
    }
  });