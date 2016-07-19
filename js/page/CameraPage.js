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

import { Ezviz } from 'react-native-ezviz';

import _find from 'lodash/find';

import IconFont from '../IconFont';

class P extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPlay: true
    };
  }
  render(){
    return (
      <View style={{flex:1}}>

        <View style={{flex:1}}>
          <Ezviz style={{height:300,height:300,borderWidth:1}} cameraId={this.props.cameraId} isPlay={this.state.isPlay} />
        </View>

        <View style={{alignItems:'center', marginBottom:10}}>
          <TouchableOpacity style={{
              width:100,height:100, borderWidth:1, borderRadius:50,
              alignItems:'center', justifyContent:'center'
            }} onPress={()=>this.setState({isPlay:!this.state.isPlay})}>
            <IconFont name={this.state.isPlay?'stop':'playfill'} style={{backgroundColor:'transparent'}} size={40} color='#7F7F7F' />
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

export default connect(
  state=>({
    cameraId: state.cameraList.selectId,
    camera: _find(state.cameraList.list, {cameraId: state.cameraList.selectId})
  })
)(P);
