Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false, // 是否显示搜索框
    inputVal: "", // 搜索框内容
    list: [{
      contact: "QQ160609777",
      name: "zhouzheng",
      remark: "",
      school: "nju",
      selfDescription: "我全栈",
      time: "2019-06-14T00:00:00.000Z",
      title: "软工二组队",
      userId: "ooRJ85QcEDT7f99ZGO9pJn-0Syas",
      _id: "6cd397ca5cf51dfa0b1527e52d61c9ff"
    }],
    curPage: 1,
    pageSize: 20
  },

  toDetailsTap: function (e) {
    // console.log(e.currentTarget)
    wx.navigateTo({
      url: "/pages/ucenter/needTeamDetail/needTeam?id=" + e.currentTarget.dataset.id
    })
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
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
      name: 'GetApplicationByUserId',
      data: {
      },
      success: function (msg) {
        console.log(msg)
        var applications = msg.result.data;
        if (applications != null) {
          that.setData({
            list: applications,
          });
        }
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
    // console.log(this.data.list);
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