//index.js
//获取应用实例
const app = getApp()
var list = require("../../libs/qqdata.js")
Page({
  data: {
    arr: []
  },
  onLoad: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    var that=this;
    list.getToplist(function (toplist){
      console.log(toplist)
      that.setData({
        arr: toplist
      })
    })
  },
})
