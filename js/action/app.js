import { createAction } from 'redux-actions';

export var memberLogin = createAction('memberLoginResult', params=>Promise.resolve(params), params=>params);

export var selectPlace = createAction('selectPlace');

export var selectData = createAction('selectData');
