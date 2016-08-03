import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import _filter from 'lodash/filter';
import _find from 'lodash/find';

import IconFont from '../IconFont';
import action from '../action';

class P extends Component {
  render(){
    return (
      <ScrollView style={{marginTop:10}}>
        {this.props.list.map(o=>(
          <TouchableOpacity key={o.id} style={{
              height:45, marginTop:1,
              flexDirection:'row',
              backgroundColor:'#fff'}} onPress={()=>{this.props.action.selectDevice(o.id);Actions.pop()}}>
              <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
                <Text style={{fontSize:15,color:'#000'}}>{o.name}</Text>
              </View>
              {this.props.selectedId == o.id ? (
                <View style={{justifyContent:'center', marginRight:15}}>
                  <IconFont name='check' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
                </View>
              ) : null}
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

export default connect(
  state=>{
    let zoneId = state.zoneList.zoneId;
    let deviceList = _filter(state.zoneList.deviceList, {zoneId});
    let selectedId = state.zoneList.deviceId;
    return {
      list: deviceList,
      selectedId: selectedId
    };
  },
  dispatch=>({
    action: bindActionCreators({
      selectDevice: action.selectDevice
    }, dispatch)})
)(P);
