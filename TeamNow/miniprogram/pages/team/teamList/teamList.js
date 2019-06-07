// miniprogram/pages/team/teamList/teamList.js
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
      url: "/pages/team/teamDetail/teamDetail?id=" + e.currentTarget.dataset.id
    })
  },
  


  //搜索
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    // console.log(e.detail.value)
    this.setData({
      inputVal: e.detail.value
    });
  },
  toSearch: function () {
    this.setData({
      curPage: 1
    });
    // console.log(this.data.inputVal)
    this.getSearchList(this.data.inputVal);
  },


  getSearchList: function (inputVal) {
    var that = this;
    if (inputVal == '') {
      this.getAll(that);
      return;
    }

    wx.showLoading({
      "mask": true
    })
    wx.cloud.callFunction({
      name: 'SearchRecruit',
      data: {
        'keywords': inputVal.toString(),
      },
      success: function (msg) {
        wx.hideLoading();
        // console.log(msg.result);
        var recruits = msg.result;
        // console.log(recruits)
        if (recruits != null) {
          console.log(that.data.list)
          that.setData({
            list: recruits
          });
        }

        // console.log(that.data.list);
      },
      fail: function (err) {
        wx.hideLoading();
        console.error(err)
      }
    });
  },

  getAll: function(that) {
    wx.showLoading({
      "mask": true
    })
    wx.cloud.callFunction({
      name: 'getAllRecruit',
      data: {
      },
      success: function (msg) {
        wx.hideLoading();
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const that = this;
    this.getAll(that);
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(this.data.list);
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