Component({
    /**
     * 组件的属性列表
     */
    properties: {
        extClass: {
            type: String,
            value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        ios: true,
        innerPaddingRight: '',
        safeAreaTop: ''
    },

    lifetimes: {
        attached() {
            const rect = wx.getMenuButtonBoundingClientRect()
            const {platform} = wx.getDeviceInfo()
            const {windowWidth, safeArea} = wx.getWindowInfo()

            const isAndroid = platform === 'android'
            const isDevtools = platform === 'devtools'
            this.setData({
                ios: !isAndroid,
                innerPaddingRight: `padding-right: ${windowWidth - rect.left}px;`,
                safeAreaTop: isDevtools || isAndroid ? `height: calc(var(--height) + ${safeArea.top}px); padding-top: ${safeArea.top}px;` : ``
            })
        },
    },
})
