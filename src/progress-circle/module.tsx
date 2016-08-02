export interface PropsDefine {
    /**
     * 当前进度百分比 0~100
     */
    percent?: number

    /**
     * 是否显示文字辅助提示
     */
    showLabel?: boolean

    /**
     * 当前状态
     * @enum normal active error success
     */
    status?: string

    /**
     * 透传
     */
    others?: any

    [x: string]: any
}

export const defaultProps: PropsDefine = {
    showLabel: false
}

export interface StateDefine {
    width?: number
}

export const defaultState: StateDefine = {
    width: 150
}