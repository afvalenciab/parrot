import React from 'react';
import Skeleton$1 from '@material-ui/lab/Skeleton';

function SkeletonCategory(_ref) {
  var _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 1 : _ref$rows;
  return (
    /*#__PURE__*/
    React.createElement(React.Fragment, null, Array.from(Array(rows).keys()).map(function (row, index) {
      return /*#__PURE__*/React.createElement(Skeleton$1, {
        key: index,
        variant: "rect",
        width: 214,
        height: 77
      });
    }))
  );
}

function SkeletonProducts(_ref) {
  var _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 1 : _ref$rows;
  return (
    /*#__PURE__*/
    React.createElement(React.Fragment, null, Array.from(Array(rows).keys()).map(function (row, index) {
      return /*#__PURE__*/React.createElement(Skeleton$1, {
        key: index,
        variant: "rect",
        width: "100%",
        height: 121
      });
    }))
  );
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function Skeleton(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/React.createElement(Skeleton$1, props);
}

export { Skeleton, SkeletonCategory, SkeletonProducts };
//# sourceMappingURL=index.modern.js.map
