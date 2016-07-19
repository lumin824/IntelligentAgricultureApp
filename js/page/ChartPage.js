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
        <TouchableOpacity style={{
            height:45, marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.selectData}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15,color:'#000'}}>监测点实时因子</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:5}}>
              <Text style={{fontSize:15,color:'#888'}}>{this.props.data.name}</Text>
            </View>
            <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>

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
  state=>{
    let { placeList } = state;
    let place = placeList.list.find(o=>o.id==placeList.selectedId);
    let data = place.dataSet.find(o=>o.id==placeList.selectedDataId);
    return {
      place, data
    }
  },
  dispatch=>({
    action: bindActionCreators({
      selectPlace: action.selectPlace
    }, dispatch)})
)(P);
