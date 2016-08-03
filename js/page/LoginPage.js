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

import Toast from 'react-native-toast';

import _find from 'lodash/find';

import action from '../action';
import IconFont from '../IconFont';

class P extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: props.username,
      password: props.password
    };
  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){

  }

  isDisabledSubmit(){
    let { username, password } = this.state;
    return !username || !password;
  }

  onPressSubmit(){
    let { username, password } = this.state;
    this.props.action.login({
      username, password
    }).then(action=>{

      //action.error ?
      if(!action.error){ Actions.main() }
      else{
        Toast.showShortBottom(action.payload);

      }
    });
  }

  render(){
    return (
      <View style={{marginTop:100,flex:1}}>

        <View style={{alignItems:'center'}}>
          <Image source={require('../../image/logo.png')} style={{height:100}} resizeMode='contain' />
          <Text style={{fontSize:30}}>思源智慧农业</Text>
        </View>
        <View style={{
            height:45,
            borderWidth:1, borderBottomWidth:0, borderColor:'#888',
            flexDirection:'row',
            //borderTopLeftRadius:5, borderTopRightRadius:5,
            marginHorizontal:15,marginTop:15
          }}>
          <View style={{justifyContent:'center', width:45, alignItems:'center', justifyContent:'center'}}>
            <IconFont name='people' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
          </View>
          <View style={{flex:1, borderLeftWidth:1, borderColor:'#888'}}>
            <TextInput style={{
                flex:1,

                backgroundColor:'transparent',
              }} onChangeText={username=>this.setState({username})} value={this.state.username} placeholder='请输入帐号' />
          </View>

        </View>

        <View style={{
            height:45,
            borderWidth:1, borderColor:'#888',
            flexDirection:'row',
            //borderBottomLeftRadius:5, borderBottomRightRadius:5,
            marginHorizontal:15
          }}>
          <View style={{justifyContent:'center', width:45, alignItems:'center', justifyContent:'center'}}>
            <IconFont name='lock' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
          </View>
          <View style={{flex:1, borderLeftWidth:1, borderColor:'#888'}}>
            <TextInput style={{
                flex:1,
                backgroundColor:'transparent'
              }} onChangeText={password=>this.setState({password})} value={this.state.password} placeholder='请输入密码' secureTextEntry={true} />
          </View>

        </View>

        <TouchableOpacity style={{
            height:45,
            alignItems:'center', justifyContent:'center',
            backgroundColor: this.isDisabledSubmit() ? '#888':'#18B4ED',
            borderRadius:5,
            marginHorizontal:15, marginTop:20,
          }} onPress={this.onPressSubmit.bind(this)} disabled={this.isDisabledSubmit()}>
          <Text style={{color:'#fff',fontSize:18}}>登录</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  state=>state.loginForm,
  dispatch=>({
    action: bindActionCreators({
      login: action.login
    }, dispatch)})
)(P);
