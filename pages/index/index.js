// index.js
Page({
    back() {
        console.log("back");
    },
    home() {
        console.log("home");
    },
    onTapNew() {
        wx.navigateTo({
            url: '/pages/not-home/index'
        })
    },
    onTapLeft() {
        console.log('left')
        wx.navigateBack({delta: 1})
    },
    onTapRight() {
        console.log('right')
    }
});
