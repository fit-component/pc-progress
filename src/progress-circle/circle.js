import React from 'react'
import classNames from 'classnames'

export default class Circle extends React.Component {
    render() {
        const props = Object.assign({}, this.props)
        const strokeWidth = props.strokeWidth
        const radius = (50 - strokeWidth / 2)
        const pathString = `M 50,50 m 0,-${radius}
        a ${radius},${radius} 0 1 1 0,${2 * radius}
        a ${radius},${radius} 0 1 1 0,-${2 * radius}`
        const len = Math.PI * 2 * radius
        const pathStyle = {
            'strokeDasharray' : `${len}px ${len}px`,
            'strokeDashoffset': `${((100 - props.percent) / 100 * len)}px`,
            'transition'      : 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        }
        const classes = classNames({
            [props.className]: props.className
        })

        return (
            <svg className={classes}
                 viewBox="0 0 100 100">
                <path d={pathString}
                      stroke={props.trailColor}
                      strokeWidth={props.trailWidth}
                      fillOpacity="0"/>

                <path d={pathString}
                      strokeLinecap="round"
                      stroke={props.strokeColor}
                      strokeWidth={props.strokeWidth}
                      fillOpacity="0"
                      style={pathStyle}/>
            </svg>
        )
    }
}

Circle.defaultProps = {
    strokeWidth: 6,
    strokeColor: '#3FC7FA',
    trailWidth : 6,
    trailColor : '#D9D9D9'
}