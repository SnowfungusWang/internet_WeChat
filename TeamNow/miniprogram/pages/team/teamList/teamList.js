// miniprogram/pages/team/teamList/teamList.js
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
    },{
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

  toDetailsTap: function (e) {
    // console.log(e.currentTarget)
    wx.navigateTo({
      url: "/pages/member/memberDetail/memberDetail?id=" + e.currentTarget.dataset.id
    })
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  toSearch: function () {
    this.setData({
      curPage: 1
    });
    this.getGoodsList(this.data.activeCategoryId);
  },
  // getGoodsList: function (categoryId, append) {
  //   if (categoryId == 0) {
  //     categoryId = "";
  //   }
  //   var that = this;
  //   wx.showLoading({
  //     "mask": true
  //   })
  //   WXAPI.goods({
  //     categoryId: categoryId,
  //     nameLike: that.data.inputVal,
  //     page: this.data.curPage,
  //     pageSize: this.data.pageSize
  //   }).then(function (res) {
  //     wx.hideLoading()
  //     if (res.code == 404 || res.code == 700) {
  //       let newData = {
  //         loadingMoreHidden: false
  //       }
  //       if (!append) {
  //         newData.goods = []
  //       }
  //       that.setData(newData);
  //       return
  //     }
  //     let goods = [];
  //     if (append) {
  //       goods = that.data.goods
  //     }
  //     for (var i = 0; i < res.data.length; i++) {
  //       goods.push(res.data[i]);
  //     }
  //     that.setData({
  //       loadingMoreHidden: true,
  //       goods: goods,
  //     });
  //   })
  // },
  getList: function () {
    let that = this;
    wx.cloud.callFunction({
      name: 'getAllRecruit',
      data: {
      },
      success: function (msg) {
        var recruits = msg.result.recruits;
        // console.log(recruits);
        // that.data.list = recruits;
        // console.log(that.data.list[0]);

        // wx.hideLoading();
      },
      fail: function (err) {
        console.error(err)
      }
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
   * 到hxh的edit界面
   */
  toEdit:function(e){
    wx.navigateTo({
      url:'../teamEdit/teamEdit'
    })
  },
  toDetail: function (e) {
    wx.navigateTo({
      url: '../teamDetail/teamDetail'
    })
  },
  toMemberDetail: function (e) {
    wx.navigateTo({
      url: '../../member/memberDetail/memberDetail'
    })
  },
  toMemberEdit: function (e) {
    wx.navigateTo({
      url: '../../member/memberEdit/memberEdit'
    })
  }
})