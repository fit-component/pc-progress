import * as React from 'react'
import * as classNames from 'classnames'
import * as modules from './module'
import {others} from '../../../../common/transmit-transparently/src'
import './index.scss'

export default class Progress extends React.Component<modules.PropsDefine, modules.StateDefine> {
    static defaultProps = modules.defaultProps

    constructor(props: modules.PropsDefine) {
        super(props)
        this.state = modules.defaultState
    }

    render() {
        const classes = classNames({
            '_namespace': true,
            [this.props['className']]: !!this.props['className']
        })

        // 如果百分比是100,则强制转为success状态
        let statusFinally = this.props.status
        if (this.props.percent === 100) {
            statusFinally = 'success'
        }

        const progressClasses = classNames({
            progress: true,
            [statusFinally]: true
        })

        return (
            <div className={classes}>
                <div className={progressClasses}
                     style={{width:`${this.props.percent}%`}}>
                    {this.props.showLabel ?
                        <span className="label">{this.props.percent}%</span> : null
                    }
                </div>
            </div>
        )
    }
}