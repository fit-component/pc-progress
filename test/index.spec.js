import React from 'react'
import {shallow, mount} from 'enzyme'
import Progress from 'fit-progress'

describe('fit-progress', ()=> {
    it('进度条label显示正常', ()=> {
        const node = mount(
            <Progress percent="30"
                      showLabel={true}/>
        )
        expect(node.text()).to.contain('30%')
    })
})