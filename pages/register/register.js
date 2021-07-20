// pages/register/register.js
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
    this.setData(
      this.data.userName = e.detail.value
    )
  },
  /**
   * 手机号输入监听
   */
  inputPhoneReg(e) {
    this.setData(
      this.data.userPhone = e.detail.value
    )
  },
  /**
   * 邮箱输入监听
   */
  inputMailReg(e) {
    this.setData(
      this.data.userMail = e.detail.value
    )
  },
  /**
   * 密码0输入监听
   */
  inputPw0Reg(e) {
    this.setData(
      this.data.userPassw0 = e.detail.value
    )
  },
  /**
   * 密码1输入监听
   */
  inputPw1Reg(e) {
    this.setData(
      this.data.userPassw1 = e.detail.value
    )
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