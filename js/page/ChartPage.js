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

import { LineChart } from 'react-native-chart';

import _times from 'lodash/times';
import _random from 'lodash/random';

import IconFont from '../IconFont';
import action from '../action';

class P extends Component {
  render(){
    return (
      <View style={{flex:1}}>

        <LineChart style={{flex:1, marginTop:10, marginBottom:10}} data={{
            xVals:_times(12, String),
            dataSet:[{
              yVals:_times(12, _random)
            }]
          }} />
      </View>
    );
  }
}

export default connect(
  state=>({}),
  dispatch=>({
    action: bindActionCreators({
      selectPlace: action.selectPlace
    }, dispatch)})
)(P);
