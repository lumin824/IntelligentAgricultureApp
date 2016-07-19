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

import IconFont from '../IconFont';

class P extends Component {
  render(){
    return (
      <View>
        <TouchableOpacity style={{
            height:80, marginTop:20,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.auth}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{flex:1,fontSize:16,color:'#000', marginTop:20}}>{this.props.phone}</Text>
              <Text style={{fontSize:14,color:'#888', marginBottom:20}}>实名认证后可使用滴滴用钱</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:45, marginTop:20,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.userinfo}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="vipcard" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>银行卡</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:45, marginTop:20,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.about}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="selection" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>关于我们</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:45, marginTop:20,
            flexDirection:'row',
            marginHorizontal:15,
            backgroundColor:'#ff5e45', borderRadius:5}} onPress={Actions.login}>
            <View style={{flex:1,justifyContent:'center', alignItems:'center', marginLeft:15}}>
              <Text style={{fontSize:18, color:'#fff'}}>退出登录</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  state=>state.loginForm
)(P);
