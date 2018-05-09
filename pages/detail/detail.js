// pages/detail/detail.js
var list = require("../../libs/qqdata.js")
Page({
  data: {
    arr: [],
    obj:[]
  },
  onLoad: function (options) {
    // console.log(options.id)
      var that = this;
      list.getToplistInfo(options.id, function (res) {
        console.log(res)
        that.setData({
          obj: res.songlist
        })
      })
  },
})