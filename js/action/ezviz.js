import { createAction } from 'redux-actions';

import * as ezviz from 'react-native-ezviz';


setTimeout(()=>{
  ezviz.setAccessToken('at.7jn7ktdj8q3kqxvce0fz9hbudx2ywjr0-73qmc6gyc2-0ol5ewe-8swk8obfv');
},1000);

//export var setAccessToken = createAction('EZVIZ_SET_ACCESS_TOKEN', ezviz.setAccessToken);
export var getCameraList = createAction('EZVIZ_CAMERA_LIST', ezviz.getCameraList);
export var getDeviceInfo = createAction('EZVIZ_DEVICE_INFO', ({cameraId})=>ezviz.getDeviceInfo(cameraId), params=>params);
export var getDeviceList = createAction('EZVIZ_DEVICE_LIST', ezviz.getDeviceList);

export var controlPTZ = createAction('EZVIZ_CONTROL_PTZ', ezviz.controlPTZ);

export var selectCamera = createAction('SELECT_CAMERA');
