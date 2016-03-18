import React from 'react'
import classNames from 'classnames'
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
            [className]: className
        })

        return (
            <div {...others} className={classes}>
                进度条插件
            </div>
        )
    }
}

Progress.defaultProps = {}