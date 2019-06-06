// miniprogram/pages/team/teamDetail/teamDetail.js
var date = new Date()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityName: '',
    name: '',
    school: '',
    selfInfo: '',
    contact: '',
    ddl: date.getFullYear() + '-' + ((date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()),
    other: '',
    applicationId:'',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //console.log(options)
    this.setData({
      applicationId: options.id
    })
    wx.cloud.callFunction({
      name: 'GetApplicationById',
      data: {
        applicationId: this.data.applicationId,
      },
      success: res => {
        console.log('teamDetail', res)
        let data=res.result.data[0]
        this.setData({
          activityName: data.title,
          name: data.name,
          school:data.school,
          selfInfo: data.selfDescription,
          contact: data.contact,
          ddl: data.time.slice(0,10),
          other: data.remark,
        })
      },
      fail: err => {
        console.error(err)
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  motify: function () {
    wx.navigateTo({
      url: "/pages/member/memberEdit/memberEdit?id=" + this.data.applicationId,
    })
  }
})
