import { createAction } from 'redux-actions';

import * as ezviz from 'react-native-ezviz';


setTimeout(()=>{
  ezviz.setAccessToken('at.b3w7wdrr99tvvhmg8h5uvxtm9l7j07p8-9kcv9ngdtl-0gy4qom-0jxsmrtz5');
},1000);

//export var setAccessToken = createAction('EZVIZ_SET_ACCESS_TOKEN', ezviz.setAccessToken);
export var getCameraList = createAction('EZVIZ_CAMERA_LIST', ezviz.getCameraList);
export var getDeviceInfo = createAction('EZVIZ_DEVICE_INFO', ({cameraId})=>ezviz.getDeviceInfo(cameraId), params=>params);
export var getDeviceList = createAction('EZVIZ_DEVICE_LIST', ezviz.getDeviceList);

export var controlPTZ = createAction('EZVIZ_CONTROL_PTZ', ezviz.controlPTZ);

export var selectCamera = createAction('SELECT_CAMERA');
