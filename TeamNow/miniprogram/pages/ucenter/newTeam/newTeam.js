// miniprogram/pages/team/teamDetail/teamDetail.js
var date = new Date()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamName: '',
    activityName: '',
    activityContent: '',
    needNum: '',
    memberList: '',
    request: '',
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
   * 保存团队名称
   */
  teamName_inputChange: function (e) {
    this.setData({
      teamName: e.detail.value
    })
  },

  teamName_detail: function (e) {
    this.setData({
      teamName: this.detail.value
    })
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
   * 保存活动内容
   * 失去焦点时获取textarea里面的内容
   */
  bindactivityContentBlur: function (e) {
    this.setData({
      activityContent: e.detail.value
    })
  },

  /**
   * 保存需要招募的人数
   */
  needNum_inputChange: function (e) {
    this.setData({
      needNum: e.detail.value
    })
  },

  needNum_detail: function (e) {
    this.setData({
      needNum: this.detail.value
    })
  },

  /**
 * 保存已有成员名单
 * 失去焦点时获取textarea里面的内容
 */
  bindmemberListBlur: function (e) {
    this.setData({
      memberList: e.detail.value
    })
  },

  /**
* 保存已有成员名单
* 失去焦点时获取textarea里面的内容
*/
  bindrequestBlur: function (e) {
    this.setData({
      request: e.detail.value
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
   * 提交表单
   */
  bindFormSubmit: function (e) {
    this.setData({
      focus: 'false',
      activityContent: this.data.activityContent,
      memberList: this.data.memberList,
      request: this.data.request,
      contact: this.data.contact,
      other: this.data.other,
    })
    let that=this
    wx.cloud.callFunction({
      name: 'releaseRecruit',
      data: {
        activityName: that.data.activityName,
        activityIntro: that.data.activityContent,
        expectNum: that.data.needNum,
        require: that.data.request,
        endDate: that.data.ddl,
        remark: that.data.other,
        teamName: that.data.teamName,
        contact: that.data.contact,
        members: that.data.memberList,
      },
      success: res => {
        // console.log('needmember', res)
        wx.showModal({
          title: '您已提交成功',
          content: '您已成功提交招募信息申请，可到“我的招募”中查看',
          showCancel: false,
          confirmText: "确定",
          success: function (res) {
            // console.log(res);
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