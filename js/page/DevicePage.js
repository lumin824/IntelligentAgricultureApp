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
import _zip from 'lodash/zip';

import action from '../action';
import IconFont from '../IconFont';

class P extends Component {
  componentDidMount(){
    this.props.action.deviceList();
  }
  render(){
    return (
      <View style={{flex:1}}>
        <TouchableOpacity style={{
            height:45, marginTop:10,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.deviceSelect}>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15,color:'#000'}}>当前设备</Text>
            </View>
            {this.props.device?(
            <View style={{justifyContent:'center', marginRight:5}}>
              <Text style={{fontSize:15,color:'#888'}}>{this.props.device.name}</Text>
            </View>
            ):null}
            <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>

        {this.props.device?(
          <View style={{marginTop:10}}>
            <View>
              <Text>设备状态：{this.props.device.isOnline == 0 ? '离线' : '在线'}</Text>
            </View>
            <View style={{flexDirection:'row',flexWrap:'wrap', justifyContent:'flex-start', paddingHorizontal:this.props.padding}}>
              {_zip(
                this.props.device.dataTypeList,
                this.props.device.dataValueList,
                this.props.device.dataUnitList
              ).map((o,i)=>(
                <TouchableOpacity key={i}
                    style={{borderRadius:5, height:this.props.cellWidth, width:this.props.cellWidth, margin:this.props.padding, alignItems:'center', backgroundColor:'#1abc9c'}}
                    onPress={()=>Actions.chart()}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{marginTop:2, marginLeft:2}}>{o[0]}</Text>
                  </View>
                  <View style={{flex:1,flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:48}}>{o[1]}</Text>
                  </View>
                  <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                    <Text style={{marginRight:2,marginBottom:2}}>{o[2]}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ):null}
      </View>
    );
  }
}

export default connect(
  state=>{
    let deviceId = state.zoneList.deviceId;
    let device = null;
    if(deviceId) device = _find(state.zoneList.deviceList, {id: deviceId});

    let minCellWidth = 100, maxCellWidth = 120;
    let minPaddingx2 = 2*2;
    let totalWidth = state.env.width;
    let fillWidth = totalWidth - minPaddingx2;

    let count = Math.floor(fillWidth / (minCellWidth + minPaddingx2));

    let cellWidth2 = Math.floor(fillWidth / count);
    let cellWidth = cellWidth2 - minPaddingx2;
    if(cellWidth > maxCellWidth) cellWidth = maxCellWidth;

    let padding = Math.floor((totalWidth - cellWidth * count)/(count + 1)/2);
    let leftPadding = (totalWidth - (cellWidth + padding) * count) / 2;

    return {
      device,
      totalWidth,padding,leftPadding,cellWidth,
      width:state.env.width,
    }
  },
  dispatch=>({
    action: bindActionCreators({
      deviceList: action.deviceList
    }, dispatch)})
)(P);
