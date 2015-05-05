'use strict';

var wSet = new WeakSet();

var obj = { first: 'value' };

wSet.add(obj);

if (wSet.has(obj)) {
  wSet['delete'](obj);
}