import React from 'react'
import {ProgressCircle} from 'fit-progress'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <ProgressCircle percent="30"
                                status="active"/>
                <ProgressCircle percent="40"
                                status="error"/>
                <ProgressCircle percent="50"
                                status="success"/>
                <ProgressCircle percent="100"/>
            </div>
        )
    }
}