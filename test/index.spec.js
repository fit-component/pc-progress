import React from 'react'
import {shallow, mount} from 'enzyme'
import Progress from 'fit-progress'

describe('fit-progress', ()=> {
    it('内容成功渲染', ()=> {
        const node = mount(<Progress/>)
        expect(node.text()).to.contain('进度条插件更新,依赖应该自动更新')
    })
})