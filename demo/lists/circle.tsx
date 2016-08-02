import * as React from 'react'
import {ProgressCircle} from '../../src'

const defaultStyle = {
    width: 150,
    marginRight: 20
}

export default class Demo extends React.Component<any, any>{
    render() {
        return (
            <div>
                <ProgressCircle percent={30}
                    status="active"
                    style={defaultStyle}/>
                <ProgressCircle percent={40}
                    status="error"
                    style={defaultStyle}/>
                <ProgressCircle percent={50}
                    status="success"
                    style={defaultStyle}/>
                <ProgressCircle percent={100}
                    style={defaultStyle}/>
            </div>
        )
    }
}