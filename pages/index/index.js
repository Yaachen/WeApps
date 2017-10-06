//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    exhibiItems: [
    {
      imgurls: "images/IAA.png",
      name: "IAA",
      description1: "Internationale Automobil-Ausstellung",
      description2: '法兰克福车展',
      s_imgurls:'images/IAA_M_01.jpg',
      n_url: "exhibits/iaa/iaa"
    },{
      imgurls: "images/CEBIT.png",
      name: "CeBit",
      description1: "Informationstechnologie und Telekommunikation",
      description2: "信息及通信技术展",
      s_imgurls:'images/cebit_M_01.jpg'
    }
    ]   
  },

  openExhibiItem: function (event) {
    console.log(event)
    wx.navigateTo({
      url: event.currentTarget.dataset.item.n_url,
      success:function (res)       
      {
        console.log(res.data);
      },
      fail: function(res) {
        console.log(res)
        console.log(url)
      }
    },
  )},
  //事件处理函数
  /*
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }*/
})
