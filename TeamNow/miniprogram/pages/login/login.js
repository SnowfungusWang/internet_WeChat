// miniprogram/pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    studentId: '',
    email: '',
    contact: '',
    intro: ''
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
  //获取输入
  name_input: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  studentId_input: function (e) {
    this.setData({
      studentId: e.detail.value
    })
  },
  email_input: function (e) {
    this.setData({
      email: e.detail.value
    })
  },
  bindcontactBlur: function (e) {
    this.setData({
      contact: e.detail.value
    })
  },
  bindselfInfoBlur: function (e) {
    this.setData({
      intro: e.detail.value
    })
  },


  bindFormSubmit: function (e) {
    let that=this//.data
    wx.login({
      success: function (res) {
        //获取openid失败，失败则回到login界面再次登录
        if (!res.code) {
          wx.showModal({
            title: '错误信息',
            content: '自动登录失败，请手动登录或注册',
            showCancel: false
          });
        }
        else {
          wx.cloud.callFunction({
            name: 'addUser',
            data: {
              code: res.code
            },
            success: res => {
              console.log("123")
              if (res.result.success) {
                //wx.setStorageSync(userId, res.result._id)
                console.log("start submit userInfo")
                wx.cloud.callFunction({
                  name: 'editUserInfo',
                  data: {
                    name: that.data.name,
                    studentId: that.data.studentId,
                    email: that.data.email,
                    contact: that.data.contact,
                    intro: that.data.intro,
                  },
                  success: res => {
                    console.log('newInfo', res)
                    if(res.result.success){
                    wx.showModal({
                      title: '欢迎使用',
                      content: '您已成功完善个人信息，请在个人中心中查看',
                      showCancel: false,
                      confirmText: "确定",
                      success: function (res) {
                        console.log(res);
                        if (res.confirm) {
                          console.log('进入')
                          wx.switchTab({
                            url: '../ucenter/userInfo/userInfo',
                          })
                        }
                      }
                    })
                  }
                  else{
                      wx.showModal({
                        title: '错误信息',
                        content: res.result.msg,
                        showCancel: false
                      });
                  }
                },
                  fail: err => {
                    console.error(err)
                  },
                })
              }
              else {
                wx.showModal({
                  title: '注册失败',
                  content: res.result.msg,
                })
              }
            }
          })
        }
      }
    });
  },
})