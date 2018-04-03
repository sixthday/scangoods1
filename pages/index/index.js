//index.js
//获取应用实例
var app = getApp()
Page({
  data: {},
  //事件处理函数
  goto_counter: function () {
    wx.navigateTo({ url: "../wineshow/wineshow" });
  },
  bindViewTap: function() {
    var that = this
    wx.scanCode({
      success: (res) => {
        wx.showLoading({title: '加载中',});
        wx.showToast({
          title: res.result,
              icon: 'success',
              duration: 2000
            });
        console.log(res);
        wx.request({
          url: 'https://bc.xii100.com/json.php', 
          data: {
           barcode: res.result
          }, 
          success: function(res) {
            wx.hideLoading()
            console.log(res.data)
            that.setData({
              barcodeData:res.data
            });
          },
          fail: function () {
            console.log('接口调用失败')
            wx.showToast({
              title: 'net fail',
              icon: 'success',
              duration: 2000
            });
          } 
        })
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')    
  }
})
