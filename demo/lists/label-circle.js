import React from 'react'
import {ProgressCircle} from 'fit-progress'

const defaultStyle = {
    width      : 150,
    marginRight: 20
}

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <ProgressCircle percent="30"
                                status="active"
                                style={defaultStyle}
                                showLabel={true}/>
                <ProgressCircle percent="40"
                                status="error"
                                style={defaultStyle}
                                showLabel={true}/>
                <ProgressCircle percent="50"
                                status="success"
                                style={defaultStyle}
                                showLabel={true}/>
                <ProgressCircle percent="100"
                                style={defaultStyle}
                                showLabel={true}/>
            </div>
        )
    }
}