import React from 'react'
import classNames from 'classnames'
import $ from 'jquery'
import './index.scss'

export default class Progress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {className, children, ...others} = this.props
        const classes = classNames({
            '_namespace': true,
            [className] : className
        })

        return (
            <div {...others} className={classes}>
                进度条插件
            </div>
        )
    }
}

Progress.defaultProps = {
    // @desc 文档实例1
    a: 1,

    // @desc 文档实例2
    b: {
        a: {
            c: {
                d: 5
            }
        },
        f: [1, 2, 3, 4, 5]
    },

    // @desc 枚举类型文档
    // @desc enum 1,2,3
    _enum: ''
}