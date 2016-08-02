import * as React from 'react'
import Progress from '../../src'

export default class Demo extends React.Component<any, any>{
    render() {
        return (
            <div>
                <Progress percent={30}
                          status="active"
                          showLabel={true}/>
                <Progress percent={40}
                          status="error"
                          showLabel={true}/>
                <Progress percent={50}
                          status="success"
                          showLabel={true}/>
                <Progress percent={100}
                          showLabel={true}/>
            </div>
        )
    }
}