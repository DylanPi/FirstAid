// pages/register/register.js
const app = getApp()
const avweapp = require('../../libs/av-weapp-min');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {},
    userName: "",
    userPhone: "",
    userMail: "",
    userPassw0: "",
    userPassw1: "",
    hasUserInfo: false,
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 
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
    const user = new avweapp.User();
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
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    avweapp.User.loginWithMiniApp().then(user => {
      this.data.user = user;
    }).catch(console.error);
    // 调用小程序 API，得到用户信息 

    // console.log(this.data.userInfo)
    // wx.getUserInfo({
    //   success: ({
    //     userInfo
    //   }) => {
    //     // 更新当前用户的信息
    //     user.set(userInfo).save().then(user => {
    //       // 成功，此时可在控制台中看到更新后的用户信息
    //       this.globalData.user = user;
    //     }).catch(console.error);
    //   }
    // });
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
        console.log(this.data.userInfo)
      },
      fail: function () {
        console.log("fail")
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},
})