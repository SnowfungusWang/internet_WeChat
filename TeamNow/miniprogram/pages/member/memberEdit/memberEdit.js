// miniprogram/pages/team/teamDetail/teamDetail.js
var date = new Date()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityName: '',
    name:'',
    school:'',
    selfInfo:'',
    contact: '',
    ddl: date.getFullYear() + '-' + ((date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()),
    other: '',
    memberID:'',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
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


  /**
   * 保存活动名称
   */
  activityName_inputChange: function (e) {
    console.log(e)
    this.setData({
      activityName: e.detail.value
    })
  },

  activityName_detail: function (e) {
    console.log(e)
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
  },

  /**
 * 点击招募button提交整个表单
 */
  bindFormSubmit: function (e) {
    console.log('!!')
    this.setData({
      focus: 'false',
      contact: this.data.contact,
      other: this.data.other,
      selfInfo: this.data.selfInfo,
    })
    wx.cloud.callFunction({
      name: 'UpdateApplicationByUserId',
      data: {
        applicationId:this.data.memberID,
        name:this.data.name,
        school:this.data.school,
        selfDescription:this.data.selfInfo,
        contact:this.data.contact,
        title:this.data.activityName,
        remark:this.data.other,
        time:this.data.ddl
      },
      success: res => {
        console.log('memberedit', res)
      },
      fail: err => {
        console.error(err)
      },
    })
  },

  /**
   * delete
   */
  delete: function (e) {
    wx.cloud.callFunction({
      name: 'DeleteApplicationById',
      data: {
        applicationId: this.data.memberID,
      },
      success: res => {
        console.log('member_delete', res)
      },
      fail: err => {
        console.error(err)
      },
    })
  }
})