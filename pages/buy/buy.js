// pages/buy/buy.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    good:"",
    index: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    wx.request({
      url: "https://www.easy-mock.com/mock/5a27c7a27bf3ee170dc24b18/buygoods/buygoods",
      success: (res) => {
        console.log(res.data.data.goods[app.globalData.id]);
        this.setData({
          good: res.data.data.goods[app.globalData.id],
          index: app.globalData.id
        })
      }
    });

  },
  addInCart: function (e) {
    console.log( app.globalData.id);
    console.log(e);
    const good = this.data.good; // 根据index，判断用户点击了哪个商品加入购物车
    const cart = app.globalData.cartList; // 获取购物车列表
    cart.push(good); // 用户选择商品加入购物车后，将该商品加入购物车列表
    console.log(cart);
    console.log(app.globalData.cartList);
    wx.showModal({
      title: '是否加入购物车?',
      content:'数量为1',
      duration: 2000
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