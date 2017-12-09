// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic:'',
    name:''
  },

  /**
   * 获取用户信息
   */
  onLoad: function (options) {
    wx.request({
      url: "https://www.easy-mock.com/mock/5a2bddd4e14b1971b65c742c/getUserInfo/getUserInfo",
      success: (res) => {
        console.log(res.data.data.user);
        this.setData({
          pic: res.data.data.user.img,
          name: res.data.data.user.name
        })
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
  
  }
})