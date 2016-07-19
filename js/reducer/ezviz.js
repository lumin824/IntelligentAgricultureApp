import { handleActions } from 'redux-actions';

export var cameraList = handleActions({
  EZVIZ_CAMERA_LIST: (state, action) => (action.error ? state : {...state, list: action.payload}),
  SELECT_CAMERA: (state, action) => (action.error ? state : {...state, selectId: action.payload}),
  EZVIZ_DEVICE_INFO: (state, action) => (action.error ? state: {...state,
    list: state.list.map(o=>(o.cameraId==action.meta.cameraId ? {...o, device:action.payload}:o))
  })
},{
  list:[]
});
