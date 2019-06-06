// miniprogram/pages/ucenter/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar:'',
    name:'',
    studentId:''
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
    let that=this
    wx.cloud.callFunction({
      name:'getUserInfo',
      success(res){
        let result = res.result
        if (result.success) {
          let user = result.user
          that.setData({
            name: user.name,
            studentId: user.studentId,
            avatar: wx.getStorageSync('avatarUrl')
          })
        }
      }
    })
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
   * 跳转
   */
  needmember:function(e){
    wx.navigateTo({
      url: '../newTeam/newTeam',
    })
  },
  needteam: function (e) {
    wx.navigateTo({
      url: '../newMember/newMember',
    })
  }
})