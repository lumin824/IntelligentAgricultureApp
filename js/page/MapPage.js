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

import { BaiduMap } from 'react-native-baidumap';

import IconFont from '../IconFont';

class P extends Component {
  render(){
    return (
      <View style={{flex:1}}>
        <BaiduMap style={{flex:1,height:100}} />
      </View>
    );
  }
}

export default P;
