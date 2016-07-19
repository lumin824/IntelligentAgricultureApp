import { combineReducers } from 'redux';

import * as app from './app';
import * as ezviz from './ezviz';

export default combineReducers({
  ...app,
  ...ezviz
});
