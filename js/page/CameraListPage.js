import React, { Component } from 'react';
import {
  Image,
  RefreshControl,
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
  constructor(props){
    super(props);
    this.state = {
      refreshing: false
    }
  }
  componentDidMount(){
    let { list } = this.props.cameraList;
    if(!list || !list.length){
      this.setState({refreshing:true})
      this.props.action.getCameraList().then(action=>{
        this.setState({refreshing:false});
      });
    }
  }
  onRefresh()
  {
    this.setState({refreshing:true})
    this.props.action.getCameraList().then(action=>{
      this.setState({refreshing:false});
    });
  }
  render(){
    return (
      <ScrollView
        refreshControl={<RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)}
          />}
         >
        {this.props.cameraList.list.map(o=>{
          return (

            <TouchableOpacity style={{
                height:45, marginTop:1,
                flexDirection:'row',
                backgroundColor:'#fff'}} key={o.cameraId} onPress={()=>{this.props.action.selectCamera(o.cameraId);Actions.camera();}}>
                <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
                  <Text>{o.cameraName}</Text>
                  <Text>{o.deviceName}</Text>
                </View>
                {o.isOnline ? (
                  <View style={{justifyContent:'center', marginRight:5}}>
                    <IconFont name='wifi' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
                  </View>
                ) : null}
    	          <View style={{justifyContent:'center', marginRight:15}}>
                  <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
                </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    )
  }
}

export default connect(
  state=>({
    cameraList: state.cameraList
  }),
  dispatch=>({
    action: bindActionCreators({
      getCameraList: action.getCameraList,
      selectCamera: action.selectCamera
    }, dispatch)})
)(P);
