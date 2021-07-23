// pages/login/login.js

const app = getApp()
const AV = require('../../libs/av-core-min.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    completeRegist: false,
    com_reg: "",
    username: "",
    password: ""
  },

  /**
   * 输入用户名监听
   */
  inputNameLog(e) {
    // console.log(e.detail.value)
    this.setData({
      username: e.detail.value,
    })
  },

  /**
   * 输入密码监听
   */
  inputPwLog(e) {
    // console.log(e.detail.value)
    this.setData({
      password: e.detail.value,
    })
  },

  /**
   * 登录事件
   */
  login() {
    //   wx.navigateTo({
    //     url: '../message/message?message='+this.data.username,
    //   })
    const {
      username,
      password,
    } = this.data;
    // console.log(username)
    AV.User.logIn(username, password).then(function (loginedUser) {
      // wx.redirectTo({
      //   url: '../message/message?message=' + "hello world!",
      // });
      wx.showToast({
          title: '登录成功',
          icon: 'success',
        }),
        setTimeout(function () {
          wx.navigateTo({
            url: '../main/main',
          })
        }, 1000)

      // 登录成功，跳转到message页面
    }, function (error) {
      wx.redirectTo({
        url: '../login/login',
      });
      wx.showToast({
        title: '检查账号和密码',
        icon: 'error',
      });
      alert(JSON.stringify(error));
    });
  },

  /**
   * 使用微信账号登录
   */
  // wxlogin(e){
  //   wx.login({
  //     success (res) {
  //       // if (res.code) {
  //       //   //发起网络请求
  //       //   wx.request({
  //       //     url: '#',
  //       //     data: {
  //       //       code: res.code
  //       //     }
  //       //   })
  //       // } else {
  //         console.log(res)
  //       }
  //   })
  // },
  // getUserInfo:function(e){
  //   console.log(e)
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (this.data.completeRegist) {
      this.setData(
        this.data.com_reg = "已完成注册，请登录!"
      )
    }
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


})