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

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // this.setData({
    //   teamID: options.id
    // })
    // wx.cloud.callFunction({
    //   name: 'getRecruitById',
    //   data: {
    //     teamId: this.data.teamID,
    //   },
    //   success: res => {
    //     console.log('teamDetail', res)
    //     this.setData({
    //       teamName: res.result.recruit.teamName,
    //       activityName: res.result.recruit.activityName,
    //       activityContent: res.result.recruit.activityIntro,
    //       needNum: res.result.recruit.expectNum,
    //       memberList: res.result.recruit.members,
    //       request: res.result.recruit.require,
    //       contact: res.result.recruit.contact,
    //       ddl: res.result.recruit.endDate,
    //       other: res.result.recruit.remark,
    //     })
    //   },
    //   fail: err => {
    //     console.error(err)
    //   },
    // })
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
 