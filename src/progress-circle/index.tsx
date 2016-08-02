import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as classNames from 'classnames'
import * as modules from './module'
import TransmitTransparent from '../../../../common/transmit-transparently/src'
import Circle from './circle'
import './index.scss'

const colors: any = {
    primary: '#2db7f5',
    active: '#2db7f5',
    success: '#87d068',
    error: '#f50',
    warning: '#fa0'
}

@TransmitTransparent()
export default class ProgressCircle extends React.Component<modules.PropsDefine, modules.StateDefine> {
    static defaultProps = modules.defaultProps
    private dom: Element

    constructor(props: modules.PropsDefine) {
        super(props)
        this.state = modules.defaultState
    }

    componentDidMount() {
        this.dom = ReactDOM.findDOMNode(this)
        this.setState({
            width: this.dom.clientWidth
        })
    }

    render() {
        const classes = classNames({
            '_namespace': true,
            [this.props['className']]: !!this.props['className']
        })

        // 如果百分比是100,则强制转为success状态
        let color = colors[this.props.status]
        if (this.props.percent === 100) {
            color = colors.success
        }

        const progressClasses = classNames({
            progress: true
        })

        const labelStyle = {
            fontSize: this.state.width / 7
        }

        return (
            <div className={classes} {...this.props.others}>
                {this.props.showLabel ?
                    <div className="absolute-box"
                        style={labelStyle}>
                        {this.props.percent}%
                    </div> : null
                }

                <Circle className={progressClasses}
                    percent={this.props.percent}
                    strokeColor={color}
                    style={{ width: `${this.props.percent}%` }}/>
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