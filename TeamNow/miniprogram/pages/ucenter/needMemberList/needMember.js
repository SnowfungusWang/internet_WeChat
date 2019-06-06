// miniprogram/pages/team/teamDetail/teamDetail.js
var date = new Date()
Page({
    /**
     * 页面的初始数据
     */
    data: {
      inputShowed: false, // 是否显示搜索框
      inputVal: "", // 搜索框内容
      list: [],
      curPage: 1,
      pageSize: 20
    },
    //跳转至详细界面
    toDetailsTap: function (e) {
      // console.log(e.currentTarget)
      wx.navigateTo({
        url: "/pages/ucenter/needMemberDetail/needMember?id=" + e.currentTarget.dataset.id
      })
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
    const that = this;
    wx.cloud.callFunction({
      name: 'getUserRecruit',
      data: {
      },
      success: function (msg) {
        var recruits = msg.result.recruits;
        // console.log(recruits);
        that.setData({
          list: recruits,
        });

        console.log(that.data.list);
        // wx.hideLoading();
      },
      fail: function (err) {
        console.error(err)
      }
    });
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