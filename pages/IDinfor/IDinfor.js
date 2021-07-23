// pages/IDinfor/IDinfor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "李鹏海",
    ifRealName: true,
    info_list: [{
        id: 0,
        name: "学习时数",
        num: 25
      }, {
        id: 1,
        name: "服务时数",
        num: 25
      },
      {
        id: 2,
        name: "急救积分",
        num: 25
      },
      {
        id: 3,
        name: "校内排名",
        num: 25
      },
    ],
    actcell: [{
        id: 0,
        name: "基本信息",
        imgsrc: "../../img/basicinfo.png",
        url: "../basicInfo/basicInfo"
      },
      {
        id: 1,
        name: "积分兑换",
        imgsrc: "../../img/points.png",
        url: "#"
      },
      {
        id: 2,
        name: "急救历史",
        imgsrc: "../../img/FAhistory.png",
        url: "#"
      },
      {
        id: 3,
        name: "每日签到",
        imgsrc: "../../img/signIn.png",
        url: "#"
      },
      {
        id: 4,
        name: "我的活动",
        imgsrc: "../../img/act.png",
        url: "#"
      },
      {
        id: 5,
        name: "我的收藏",
        imgsrc: "../../img/favo.png",
        url: "#"
      },
      {
        id: 6,
        name: "设置",
        imgsrc: "../../img/setting.png",
        url: "#"
      },
    ],
  },

  /**
   * 头部点击响应
   */
  click_head(e){
    wx.navigateTo({
      url: '../basicInfo/basicInfo',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

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