// pages/cart/cart.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [],
    sum: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */

  // goToIndex: function(){
  //   wx.navigateTo({
  //     url:'../summer/summer'
  //   })
  // },
  onLoad: function (options) {
    this.setData({
      // 页面加载时就给购物车显示商品数量
      goodsList: app.globalData.cartList
    });
    this.sumMoney();
    console.log(app.globalData.cartList);
  //   if(goodsList.length>0){
  //     var text = document.getElementById('cart-body');
  //     text.style.fontSize = 0;
    
  // }
  },
  addCount:function (e) {
    var that = this;
    console.log(e);
    const goodId = e.currentTarget.id;
    console.log(that.data.goodsList[goodId]);
    that.data.goodsList[goodId].num++;
    console.log(that.data.goodsList[goodId]);
    this.setData({
      goodsList: that.data.goodsList
    })
    this.sumMoney();
    
  },
  // 减少商品数量
  reduceCount: function(e) {
    var that = this;
    const goodId = e.currentTarget.id;
    // console.log(that.data.goodsList[goodId]);
    if(that.data.goodsList[goodId].num <= 1) {
      that.data.goodsList[goodId].num = 1;
      wx.showModal({
        title: '数量小于1',
        content: '不允许操作',
        duration: 2000
      })
    } else {
      that.data.goodsList[goodId].num--;
    }
    // console.log(that.data.goodsList[goodId]);
    this.setData({
      goodsList: that.data.goodsList
    })
    this.sumMoney();
  },
  // 计算所有商品的钱数
  sumMoney: function() {
    var count = 0;
    const goods = this.data.goodsList;
    console.log(goods);
    for(let i = 0; i < goods.length; i++) {
      count += goods[i].num*goods[i].price;
    }
    this.setData({
      sum: count
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