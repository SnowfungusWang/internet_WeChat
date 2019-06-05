// miniprogram/pages/ucenter/editInfo/editInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    studentId: '',
    email: '',
    contact: '',
    intro: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.cloud.callFunction({
      name: 'getUserInfo',
      success(res) {
        let result = res.result
        if (result.success) {
          let user = result.user
          that.setData({
            name: user.name,
            studentId: user.studentId,
            email: user.email,
            contact: user.contact,
            intro: user.intro
          })
        }
      }
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
  //获取输入
  name_input:function(e){
    this.setData({
      name:e.detail.value
    })
  },
  studentId_input:function(e){
    this.setData({
      studentId:e.detail.value
    })
  },
  email_input:function(e){
    this.setData({
      email:e.detail.value
    })
  },
  bindcontactBlur:function(e){
    this.setData({
      contact:e.detail.value
    })
  },
  bindselfInfoBlur:function(e){
    this.setData({
      intro:e.detail.value
    })
  },

  bindFormSubmit: function (e) {
    console.log("start submit userInfo")
    wx.cloud.callFunction({
      name: 'editUserInfo',
      data: {
        name: this.data.name,
        studentId: this.data.studentId,
        email: this.data.email,
        contact: this.data.contact,
        intro: this.data.intro,
      },
      success: res => {
        console.log('newInfo', res)
        wx.showModal({
          title: '修改成功',
          content: '您已成功修改自己的个人信息',
          showCancel: false,
          confirmText: "确定",
          success: function (res) {
            console.log(res);
            if (res.confirm) {
              console.log('回到个人信息')
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