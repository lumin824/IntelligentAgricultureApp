import { createAction } from 'redux-actions';

import mapValues from 'lodash/mapValues';
import forEach from 'lodash/forEach';

let httpServer = 'http://api.ngsyun.com:3000/api/';
let httpApiList = {
  'login': {url:'login', jsonBody:true},
  'zoneList': {url:'zoneList', jsonBody:true},
  'deviceList': {url:'deviceList', jsonBody:true},
  //'memberLogin': 'member-login',
  'memberAuth': 'member-auth',
  'memberAuthList': 'member-auth-list',
  'productList': 'product-list',
  'productBuy': 'product-buy',
  'productBuyList': 'product-buy-list',
  'productPay': 'product-pay'
};

let defaultHeader = {
  'content-type':'application/json'
};

var httpActions = mapValues(httpApiList, (actionConfig, actionName) => {
  if(typeof(actionConfig) === 'string') actionConfig = {url:actionConfig};
  let requestAction = createAction(actionName + 'Request');
  let resultAction = createAction(actionName + 'Result',
    params => {
      let url = actionConfig.url;

      let body;
      if(actionConfig.jsonBody){
        body = JSON.stringify(params);
      }else{
        body = new FormData();
        params = {...params, developer:'lumin824@163.com'};
        forEach(params, (o, k)=>{ body.append(k,o || '')});
      }

      let headers = { ...defaultHeader };
      if(actionConfig.headers) headers = {...actionConfig.headers};

      return fetch(`${httpServer}${url}`, {body,method:'POST',headers})
      //.then(response=>{console.log(response);return response;})
      //.then(response=>response.status == '200' ? response.text(): Promise.reject(response.json()))
      //.then(text=>{console.log(text);let json = JSON.parse(text); return json;})
      .then(response=>response.json())
      .then(json=>json.error ? Promise.reject(json.payload): json.payload)
    }, params=>params
  );

  return params => dispatch => {
    dispatch(requestAction(params));
    return dispatch(resultAction(params));
  }
});


export default {
  ...httpActions
}
