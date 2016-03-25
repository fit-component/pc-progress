'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Circle = function (_React$Component) {
    _inherits(Circle, _React$Component);

    function Circle() {
        _classCallCheck(this, Circle);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Circle).apply(this, arguments));
    }

    _createClass(Circle, [{
        key: 'render',
        value: function render() {
            var props = _extends({}, this.props);
            var strokeWidth = props.strokeWidth;
            var radius = 50 - strokeWidth / 2;
            var pathString = 'M 50,50 m 0,-' + radius + '\n        a ' + radius + ',' + radius + ' 0 1 1 0,' + 2 * radius + '\n        a ' + radius + ',' + radius + ' 0 1 1 0,-' + 2 * radius;
            var len = Math.PI * 2 * radius;
            var pathStyle = {
                'strokeDasharray': len + 'px ' + len + 'px',
                'strokeDashoffset': (100 - props.percent) / 100 * len + 'px',
                'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
            };
            var classes = (0, _classnames2.default)(_defineProperty({}, props.className, props.className));

            return _react2.default.createElement(
                'svg',
                { className: classes,
                    viewBox: '0 0 100 100' },
                _react2.default.createElement('path', { d: pathString,
                    stroke: props.trailColor,
                    strokeWidth: props.trailWidth,
                    fillOpacity: '0' }),
                _react2.default.createElement('path', { d: pathString,
                    strokeLinecap: 'round',
                    stroke: props.strokeColor,
                    strokeWidth: props.strokeWidth,
                    fillOpacity: '0',
                    style: pathStyle })
            );
        }
    }]);

    return Circle;
}(_react2.default.Component);

exports.default = Circle;


Circle.defaultProps = {
    strokeWidth: 6,
    strokeColor: '#3FC7FA',
    trailWidth: 6,
    trailColor: '#D9D9D9'
};