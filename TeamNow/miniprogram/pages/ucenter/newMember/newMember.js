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


  /**
   * 保存活动名称
   */
  activityName_inputChange: function (e) {
    this.setData({
      activityName: e.detail.value
    })
  },

  activityName_detail: function (e) {
    this.setData({
      activityName: this.detail.value
    })
  },


  /**
   * 保存姓名
   */
  name_inputChange: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  name_detail: function (e) {
    this.setData({
      name: this.detail.value
    })
  },

  /**
   * 保存学校
   */
  school_inputChange: function (e) {
    this.setData({
      school: e.detail.value
    })
  },

  school_detail: function (e) {
    this.setData({
      school: this.detail.value
    })
  },

  /**
   * 保存自我简介
   * 失去焦点时获取textarea里面的内容
   */
  bindselfInfoBlur: function (e) {
    this.setData({
      selfInfo: e.detail.value
    })
  },

  /**
* 保存联系方式
* 失去焦点时获取textarea里面的内容
*/
  bindcontactBlur: function (e) {
    this.setData({
      contact: e.detail.value
    })
  },

  /**
   * 招募截止日期
   */
  bindddlChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      ddl: e.detail.value
    })
  },

  /**
* 保存备注
* 失去焦点时获取textarea里面的内容
*/
  bindotherBlur: function (e) {
    this.setData({
      other: e.detail.value
    })
    console.log(this.data)
  },
  
  bindFormSubmit: function (e) {
    console.log("start submit member")
    wx.cloud.callFunction({
      name: 'AddApplication',
      data: {
        name: this.data.name,
        school: this.data.school,
        selfDescription: this.data.selfInfo,
        contact: this.data.contact,
        title: this.data.activityName,
        remark: this.data.other,
        time: this.data.ddl,
      },
      success: res => {
        console.log('needmember', res)
        wx.showModal({
          title: '您已提交成功',
          content: '您已成功提交组队申请，可到“我的的组队申请”中查看',
          showCancel: false,
          confirmText: "确定",
          success: function (res) {
            console.log(res);
            if (res.confirm) {
              console.log('回到主界面')
              wx.switchTab({
                url: '../index/index',
              })
            } 
          }
        })
      },
      fail: err => {
        console.error(err)
      },
    })
  },

})