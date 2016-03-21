import React from 'react'
import classNames from 'classnames'
import './index.scss'

export default class Progress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {className, children, percent, status, ...others} = this.props
        const classes = classNames({
            '_namespace': true,
            [className] : className
        })

        const progressClasses = classNames({
            progress: true,
            [status]: true
        })

        return (
            <div {...others} className={classes}>
                <div className={progressClasses}
                     style={{width:`${percent}%`}}></div>
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