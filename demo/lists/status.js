import React from 'react'
import Progress from 'fit-progress'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Progress percent="30"
                          status="active"/>
                <Progress percent="40"
                          status="error"/>
                <Progress percent="50"
                          status="success"/>
                <Progress percent="100"/>
            </div>
        )
    }
}