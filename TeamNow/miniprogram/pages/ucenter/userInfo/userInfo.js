// miniprogram/pages/ucenter/userInfo/userInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    studentId:'',
    email:'',
    contact:'',
    intro:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //mock
    console.log(this)
    // this.setData({
    //   name: 'miao',
    //   studentId: '171252298',
    //   email: '13248612315648@smail.nju.edu.cn',
    //   contact: "asdffasdfasdfsdsfasfadfasdWERFEQ",
    //   intro: 'I am a pretty handsome guy.hhhhhhgggggggggggggggggggggggghhhfsad'
    // })
    let that=this
    wx.cloud.callFunction({
      name:'getUserInfo',
      success(res){
        console.log(res)
        let result=res.result
        if(result.success){
          let user=result.user
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
  edit:function(){
    wx.navigateTo({
      url: '../editInfo/editInfo',
    });
  }
})