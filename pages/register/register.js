// pages/register/register.js
const app = getApp()
const AV = require('../../libs/av-core-min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    userPhone: "",
    userMail: "",
    userPassw0: "",
    userPassw1: ""
  },
  /**
   * 用户名输入监听
   */
  inputNameReg(e) {
    this.setData({
      userName: e.detail.value,
    })
  },
  /**
   * 手机号输入监听
   */
  inputPhoneReg(e) {
    this.setData({
      userPhone: e.detail.value,
    })
  },
  /**
   * 邮箱输入监听
   */
  inputMailReg(e) {
    this.setData({
      userMail: e.detail.value,
    })
  },
  /**
   * 密码0输入监听
   */
  inputPw0Reg(e) {
    this.setData({
      userPassw0: e.detail.value,
    })
  },
  /**
   * 密码1输入监听
   */
  inputPw1Reg(e) {
    this.setData({
        userPassw1: e.detail.value,
      }

    )
  },
  /**
   * 注册
   */
  register() {
    const {
      userName,
      userPhone,
      userMail,
      userPassw0,
      userPassw1
    } = this.data;
    const user = new AV.User();
    if (userName) user.set({
      username
    });
    if (userPassw0) user.set({
      password
    });
    user.save().then(() => {
      wx.showToast({
        title: '注册成功',
        icon: 'success',
      });
    }).catch(error => {
      wx.showToast({
        title: error.message,
        icon: 'none'
      })
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log(this.data)
  },
})