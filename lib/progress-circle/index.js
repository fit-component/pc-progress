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

var _circle = require('./circle');

var _circle2 = _interopRequireDefault(_circle);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var colors = {
    primary: '#2db7f5',
    active: '#2db7f5',
    success: '#87d068',
    error: '#f50',
    warning: '#fa0'
};

var Progress = function (_React$Component) {
    _inherits(Progress, _React$Component);

    function Progress(props) {
        _classCallCheck(this, Progress);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Progress).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Progress, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var percent = _props.percent;
            var status = _props.status;

            var others = _objectWithoutProperties(_props, ['className', 'percent', 'status']);

            var classes = (0, _classnames2.default)(_defineProperty({
                'lib-pc-progress-lib-progress-circle': true
            }, className, className));

            // 如果百分比是100,则强制转为success状态
            var color = colors[status];
            if (parseInt(percent) === 100) {
                color = colors.success;
            }

            var progressClasses = (0, _classnames2.default)({
                progress: true
            });

            return _react2.default.createElement(
                'div',
                _extends({}, others, { className: classes }),
                _react2.default.createElement(_circle2.default, { className: progressClasses,
                    percent: percent,
                    strokeColor: color,
                    style: { width: percent + '%' } })
            );
        }
    }]);

    return Progress;
}(_react2.default.Component);

exports.default = Progress;


Progress.defaultProps = {
    // @desc 当前进度百分比
    percent: 0,

    // @desc 是否显示文字辅助提示
    showLabel: false,

    // @desc 当前状态
    // @enum normal active error success
    status: 'normal'
};