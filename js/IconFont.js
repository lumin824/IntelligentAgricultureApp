/**
 * IconFont icon set component.
 * Usage: <IconFont name="icon-name" size={20} color="#4F8EF7" />
 */

import { createIconSet } from 'react-native-vector-icons';
const glyphMap = {
  "check": 58891,
  "back": 58880,
  "discover": 58881,
  "settings": 58882,
  "right": 58883,
  "discoverfill": 58884,
  "lock": 58885,
  "wifi": 58892,
  "rankfill": 58886,
  "rank": 58887,
  "people": 58888,
  "playfill": 58893,
  "stop": 58894,
  "videofill": 58889,
  "video": 58890
};

let IconFont = createIconSet(glyphMap, 'iconfont', 'iconfont.ttf');

module.exports = IconFont;
module.exports.glyphMap = glyphMap;
