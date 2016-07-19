import React, { Component } from 'react';

import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { connect, Provider } from 'react-redux';
import { Scene, Router, Actions, Reducer } from 'react-native-router-flux';

import configStore from './configStore';
import * as page from './page';
import IconFont from './IconFont';

class TabIcon extends Component {
    render(){
      let iconName = this.props.selected ? this.props.activeIconName || this.props.iconName : this.props.iconName;
      let color = this.props.selected ? '#18B4ED' : '#B3B3B3';
        return (
          <View style={{alignItems:'center'}}>
            <IconFont name={iconName} style={{backgroundColor:'transparent'}} size={24} color={color} />
            <Text style={{color, fontSize:11}}>{this.props.iconText || this.props.title}</Text>
          </View>
        );
    }
}

class BackButton extends Component {
  render(){
    return (
      <TouchableOpacity style={this.props.style} onPress={Actions.pop}>
        <View style={{justifyContent:'center'}}>
          <IconFont name='back' size={20} color='#fff' />
        </View>
      </TouchableOpacity>
    );
  }
}

const ConnectedRouter = connect()(Router);

const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#f1f1f1',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

class App extends Component {
  render(){
    return (
      <ConnectedRouter
        getSceneStyle={getSceneStyle}
        navigationBarStyle={{backgroundColor:'#18B4ED'}}
        titleStyle={{color:'#fff'}}
        >
        <Scene key='login' component={page.LoginPage} hideNavBar={true} hideTabBar={true} title='登录' type='reset' />
        <Scene key='main' tabs={true} type='replace' tabBarStyle={{backgroundColor:'#fff'}}>
          <Scene key='chartList' component={page.ChartListPage} title='监测点' icon={TabIcon} iconName='rank' activeIconName='rankfill' />
          <Scene key='mapList' component={page.MapListPage} title='分布图' icon={TabIcon} iconName='discover' activeIconName='discoverfill' />
          <Scene key='cameraList' component={page.CameraListPage} title='视频' icon={TabIcon} iconName='video' activeIconName='videofill' />
        </Scene>
        <Scene key='chart' component={page.ChartPage} hideNavBar={false} hideTabBar={true} getTitle={()=>this.props.place.name} backButton={BackButton} />
        <Scene key='selectData' component={page.SelectDataPage} hideNavBar={false} hideTabBar={true} title='选择实时因子' backButton={BackButton} />
        <Scene key='map' component={page.MapPage} hideNavBar={false} hideTabBar={true} title='分布图' backButton={BackButton} />
        <Scene key='camera' component={page.CameraPage} hideNavBar={false} hideTabBar={true} getTitle={()=>this.props.camera.deviceName} backButton={BackButton} />
        <Scene key='about' component={page.AboutPage} hideNavBar={false} hideTabBar={true} title='关于' backButton={BackButton}/>
        <Scene key='fullscreen' component={page.FullscreenPage} hideNavBar={true} hideTabBar={true} title='关于' backButton={BackButton}/>
    </ConnectedRouter>
    );
  }
};

const ConnectedApp = connect(state=>({
  place: state.placeList.list.find(o=>o.id==state.placeList.selectedId),
  camera: state.cameraList.list.find(o=>o.cameraId==state.cameraList.selectId)
}))(App);

class ReduxApp extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      store: configStore(()=>this.setState({isLoading:false}))
    }
  }
  render(){
    if(this.state.isLoading){
      return null;
    }

    return (
      <Provider store={this.state.store}>
        <ConnectedApp />
      </Provider>
    );
  }
}

export default ReduxApp;
