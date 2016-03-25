import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import Circle from './circle'
import './index.scss'

const colors = {
    primary: '#2db7f5',
    active : '#2db7f5',
    success: '#87d068',
    error  : '#f50',
    warning: '#fa0'
}

export default class ProgressCircle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 150
        }
    }

    componentDidMount() {
        this.dom = ReactDOM.findDOMNode(this)
        this.setState({
            width: this.dom.clientWidth
        })
    }

    render() {
        const {className, percent, status, ...others} = this.props
        const classes = classNames({
            '_namespace': true,
            [className] : className
        })

        // 如果百分比是100,则强制转为success状态
        let color = colors[status]
        if (parseInt(percent) === 100) {
            color = colors.success
        }

        const progressClasses = classNames({
            progress: true
        })

        const labelStyle = {
            fontSize: this.state.width / 7
        }

        return (
            <div {...others} className={classes}>
                {this.props.showLabel ?
                    <div className="absolute-box"
                         style={labelStyle}>
                        {percent}%
                    </div> : null
                }

                <Circle className={progressClasses}
                        percent={percent}
                        strokeColor={color}
                        style={{width:`${percent}%`}}/>
            </div>
        )
    }
}

ProgressCircle.defaultProps = {
    // @desc 当前进度百分比
    percent: 0,

    // @desc 是否显示文字辅助提示
    showLabel: false,

    // @desc 当前状态
    // @enum normal active error success
    status: 'normal'
}