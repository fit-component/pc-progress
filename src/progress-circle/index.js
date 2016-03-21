import React from 'react'
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

export default class Progress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
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
            progress       : true
        })

        return (
            <div {...others} className={classes}>
                <Circle className={progressClasses}
                        percent={percent}
                        strokeColor={color}
                        style={{width:`${percent}%`}}/>
            </div>
        )
    }
}

Progress.defaultProps = {
    // @desc 当前进度百分比
    percent: 0,

    // @desc 是否显示文字辅助提示
    showLabel: false,

    // @desc 当前状态
    // @enum normal active error success
    status: 'normal'
}