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

import _find from 'lodash/find';

import action from '../action';
import IconFont from '../IconFont';

class P extends Component {
  componentDidMount(){
    this.props.action.zoneList();
  }
  render(){
    return (
      <View style={{flex:1, marginTop:10}}>
        {this.props.zone?(
          <View style={{marginHorizontal:10}}>
            <Text style={{fontSize:16}}>　　{this.props.zone.info}</Text>
            <View style={{height:10}}/>
            <Text style={{fontSize:16}}>地址:{this.props.zone.address}</Text>
            <Text style={{fontSize:16}}>联系人:{this.props.zone.contact}</Text>
            <Text style={{fontSize:16}}>联系电话:{this.props.zone.phone}</Text>

            <View style={{flexDirection:'row'}}>
              {this.props.zone.images && this.props.zone.images.map((o,i)=>(
                <View style={{margin:2, borderWidth:1}} key={i}>
                  <Image source={{uri:o}} style={{width:100,height:100}} resizeMode='contain' />
                </View>
              ))}
            </View>
          </View>
        ):null}

      </View>
    );
  }
}

export default connect(
  state=>({
    zone: _find(state.zoneList.list, {id: state.zoneList.zoneId})
  }),
  dispatch=>({
    action: bindActionCreators({
      zoneList: action.zoneList
    }, dispatch)})
)(P);
