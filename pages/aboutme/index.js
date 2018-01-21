//index.js
//获取应用实例


Page({
  data: {
    date: '2016-09-01',
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
    formSubmit: function (e){
      console.log('form submit *****',e.detail.value)

    },
 formReset: function (e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })}
  
})
