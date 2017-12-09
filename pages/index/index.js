//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    goods:[]
  },
  //事件处理函数
  swiperView1: function () {
    wx.navigateTo({
      url:'../summer/summer'
    });
  },
  swiperView2: function () {
    wx.navigateTo({
      url:'../goodclo/goodclo'
    });
  },
  goodView:function () {
    wx.navigateTo({
      url:'../goodclo/googclo'
    })
  },
  //获取id跳转
  BuyView:function(e){
    console.log(e);
    app.globalData.id = e.currentTarget.id;
    wx.navigateTo({
      url:'../buy/buy'
    });
     
    
  },
  // 获取商品信息
  onLoad: function () {
    wx.request({
      url: "https://www.easy-mock.com/mock/5a27c7a27bf3ee170dc24b18/buygoods/buygoods",
      success: (res) => {
        console.log(res.data.data.goods);
        this.setData({
          goods: res.data.data.goods
        })
      }
    })
  }
  
})
