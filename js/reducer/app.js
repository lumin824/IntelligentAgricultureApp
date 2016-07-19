import { handleActions } from 'redux-actions';

export var loginForm = handleActions({
  'memberLoginResult': (state, action) => (action.error ? state : action.meta)
},{});


export var productList = handleActions({
  'productListResult': (state, action) => (action.error ? state : action.payload)
},[]);

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
