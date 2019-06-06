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
    ddl: '',
    other: '',
    memberID:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      memberID: options.id
    })
    wx.cloud.callFunction({
      name: 'GetApplicationById',
      data: {
        applicationId: this.data.memberID,
      },
      success: res => {
        console.log('memberDetail', res)
        let date = new Date(res.result.data[0].time)
        this.setData({
          activityName: res.result.data[0].title,
          name: res.result.data[0].name,
          school: res.result.data[0].school,
          selfInfo: res.result.data[0].selfDescription,
          contact: res.result.data[0].contact,
          ddl: date.getFullYear() + '-' + ((date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()),
          other: res.result.data[0].remark,
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
})
 