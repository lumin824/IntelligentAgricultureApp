import React, { Component } from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { Ezviz,test,test2 } from 'react-native-ezviz';

class P extends Component {
  componentDidMount(){
    test();
  }
  componentWillUnmount(){
    test2();
  }
  render(){
    return (
      <View>
        <TouchableOpacity onPress={()=>Actions.pop()}>
          <Text>后退</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default P;
