/*!
 * get-view <https://github.com/jonschlinkert/get-view>
 *
 * Copyright (c) 2016-2018, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

const path = require('path');
const endsWith = require('path-ends-with');

module.exports = function(collection, name) {
  if (!collection || typeof collection !== 'object') {
    throw new TypeError('expected the first argument to be an object');
  }

  if (collection[name]) return collection[name];

  for (const key of Object.keys(collection)) {
    const view = collection[key];
    if (name === view.path) return view;
    if (name === relative(view)) return view;
    if (name === basename(view)) return view;
    if (name === stem(view)) return view;

    if (typeof name === 'function') {
      if (name(view) === true) {
        return view;
      }
      continue;
    }

    if (typeof view.hasPath === 'function' && view.hasPath(name)) {
      return view;
    }

    if (name instanceof RegExp) {
      if (name.test(view.path) || (view.history && name.test(view.history[0]))) {
        return view;
      }
      continue;
    }

    if (endsWith(view.path, name) || (view.history && endsWith(view.history[0], name))) {
      return view;
    }
  }
};

function stem(view) {
  return view.stem || path.basename(view.path, path.extname(view.path));
}

function basename(view) {
  return view.basename || path.basename(view.path);
}

function relative(view) {
  const cwd = view.cwd || process.cwd();
  return view.relative || path.relative(cwd, view.path);
}
