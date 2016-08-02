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

    [x: string]: any
}

export const defaultProps: PropsDefine = {
    percent: 0,
    showLabel: false,
    status: 'normal'
}

export interface StateDefine {

}

export const defaultState: StateDefine = {}