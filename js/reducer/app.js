import { Dimensions } from 'react-native';
import { handleActions } from 'redux-actions';

import _find from 'lodash/find';
import _filter from 'lodash/filter';

export var loginForm = handleActions({
  'loginResult': (state, action) => (action.error ? state : action.meta)
},{});

export var loginUser = handleActions({
  'loginResult': (state, action) => {
    if(action.error) return state;
    let user = action.payload;
    return {...state, ...user, isAdmin:user.userid == 1};
  }
},{});

const {height, width} = Dimensions.get('window');

export var env = handleActions({
  'setAppWidth': (state, action) => ({...state, width:action.payload})
},{
  maxWidth:width,
  width,height,
  fontFamily:'STZhongsong'
});


export var placeList = handleActions({
  'selectPlace': (state, action) => {
    let selectedId = action.payload;
    let place = state.list.find(o=>o.id==selectedId);
    return {...state, selectedId, selectedDataId: place.dataSet[0].id};
  },
  'selectData': (state, action) => ({...state, selectedDataId: action.payload})
},{
  list:[
    { id:'1', name:'新兴八戒', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'2', name:'杨湾', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'3', name:'无锡', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'4', name:'建湖农科所基地', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'5', name:'九龙口', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'6', name:'高作养猪', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'7', name:'潘黄仰徐', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'8', name:'亭湖黄尖', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'9', name:'盐东农业园', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'10', name:'杨湾', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] }
  ],
  selectedId: '',
  selectedDataId: '',
});

export var groupList = handleActions({},{
  list:[
    { id:'1', name:'新兴八戒', desc:'新兴八戒简介',
      images:['https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png','https://o1wjx1evz.qnssl.com/static-20160718/assets/img/logo_nav.png'],
      dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'2', name:'杨湾', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'3', name:'无锡', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'4', name:'建湖农科所基地', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'5', name:'九龙口', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'6', name:'高作养猪', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'7', name:'潘黄仰徐', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'8', name:'亭湖黄尖', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'9', name:'盐东农业园', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'10', name:'杨湾', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] }
  ],
  selectedId: '1',
})

export var zoneList = handleActions({
  'zoneListResult': (state, action) => {
    if(action.error) return state;

    let list = action.payload;
    let zoneId = list[0].id;
    let deviceId = null;
    return {...state, list, zoneId, deviceId};
  },
  'selectZone': (state, action) => {
    let zoneId = action.payload;
    let deviceList = _filter(state.deviceList, {zoneId:zoneId});
    let deviceId = null;
    if(deviceList && deviceList.length) deviceId = deviceList[0].id;
    return { ...state, zoneId, deviceId };
  },
  'selectDevice': (state, action) => {
    return { ...state, deviceId: action.payload };
  },
  'deviceListResult': (state, action) => {
    if(action.error) return state;
    let deviceList = action.payload;
    let {deviceId, zoneId} = state;
    if(zoneId && !deviceId){
      let deviceListByZone = _filter(deviceList, {zoneId:zoneId});
      if(deviceListByZone && deviceListByZone.length) deviceId = deviceListByZone[0].id;
    }
    return {...state, deviceList, deviceId};
  }
},{
  list:[
    { id:'1', name:'新兴八戒', desc:'位于盐城市亭湖区新兴镇的“八戒”生态果蔬开心农场里一片繁忙：负责人朱元华正在指挥工人采摘小青菜；几位前来运货的客户看着青翠欲滴的小青菜，满意之色溢于言表。“早就听说‘八戒’农场的小青菜是纯天然绿色产品，从来不用高毒农药、化肥、催熟剂、保鲜剂，到现场一看，果然是这样！”来自盐都区郭猛镇的菜贩孙金宽说。',
      contact:'张三', phone:'110',
      images:['https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png','https://o1wjx1evz.qnssl.com/static-20160718/assets/img/logo_nav.png'],
      deviceList:[{
        id:'1', name:'设备1', isOnline:true,
        dataTypeList:['空气温度','空气湿度','土壤温度','土壤湿度','氨气','二氧化碳','盐分','光照度'],
        dataValueList:['25','25','25','25','25','25','25','25'],
        dataUnitList:['℃','%','℃','%','mg/m³','mg/m³','mg/m³','mg/m³']
      },{
        id:'2', name:'设备2', isOnline:false,
        dataTypeList:['空气温度','空气湿度','土壤温度','土壤湿度','氨气','二氧化碳','盐分','光照度']
      },{
        id:'3', name:'设备3', isOnline:false,
        dataTypeList:['空气温度','空气湿度','土壤温度','土壤湿度','氨气','二氧化碳','盐分','光照度']
      }],
      dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'2', name:'杨湾', desc:'杨湾简介',
      dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'3', name:'无锡', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'4', name:'建湖农科所基地', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'5', name:'九龙口', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'6', name:'高作养猪', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'7', name:'潘黄仰徐', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'8', name:'亭湖黄尖', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'9', name:'盐东农业园', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] },
    { id:'10', name:'杨湾', dataSet:[
      { id:'1', name: '空气温度' },
      { id:'2', name: '空气湿度' },
      { id:'3', name: '降雨量' },
      { id:'4', name: '光照强度' },
    ] }
  ],
  deviceList:[],
  zoneId:null,
  deviceId:null,
});
