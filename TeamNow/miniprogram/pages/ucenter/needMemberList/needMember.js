// miniprogram/pages/team/teamDetail/teamDetail.js
var date = new Date()
Page({
    /**
     * 页面的初始数据
     */
    data: {
      inputShowed: false, // 是否显示搜索框
      inputVal: "", // 搜索框内容
      list: [{
        activityIntro: "活动的简要介绍",
        activityName: "校运会",
        contact: "18811112222",
        endDate: "2019-06-04",
        expectNum: "14",
        members: "5",
        openId: "ooRJ85dmDzgsGmw-EmpMsF1f_vNY",
        remark: "8",
        require: "9",
        teamName: "team1",
        _id: "6cd397ca5cf5bee00b41160e698d4092"
      }, {
        activityIntro: "活动介绍",
        activityName: "活动名称",
        contact: "联系方式",
        endDate: "结束日期2019-06-04",
        expectNum: "期望个数4",
        members: "已有人数5",
        openId: "ooRJ85dmDzgsGmw-EmpMsF1f_vNY",
        remark: "分数8",
        require: "需要6",
        teamName: "队伍名称1",
        _id: "6cd397ca5cf5bee00b41160e698d4092"
      }],
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