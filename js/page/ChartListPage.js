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

import IconFont from '../IconFont';
import action from '../action';

class P extends Component {
  render(){
    return (
      <ScrollView>
        {this.props.list.map(o=>(
          <TouchableOpacity key={o.id} style={{
              height:45, marginTop:1,
              flexDirection:'row',
              backgroundColor:'#fff'}} onPress={()=>{this.props.action.selectPlace(o.id);Actions.chart()}}>
              <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
                <Text style={{fontSize:15,color:'#000'}}>{o.name}</Text>
              </View>
  	          <View style={{justifyContent:'center', marginRight:15}}>
                <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
              </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

export default connect(
  state=>state.placeList,
  dispatch=>({
    action: bindActionCreators({
      selectPlace: action.selectPlace
    }, dispatch)})
)(P);
