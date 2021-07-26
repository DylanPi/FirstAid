// app.js
const AV = require('./libs/av-core-min')
const adapters = require('./libs/leancloud-adapters-weapp.js')

AV.setAdapters(adapters)
AV.init({
  appId: 'zzuXKNMpzK0r6Ka12gP08fx5-gzGzoHsz',
  appKey: 'cAG7rlcNIYbXkhGvTyIyt0er',
  // 请将 xxx.example.com 替换为你的应用绑定的自定义 API 域名
  serverURLs: "https://zzuxknmp.lc-cn-n1-shared.com",
})
App({



  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow() {
    AV.User.loginWithMiniApp().then(user => {
      // console.log('--------------------------------------------------------------')
      // console.log( user)
      // console.log('--------------------------------------------------------------')
      this.globalData.user = user
    }).catch(console.error)
  },
  globalData: {
    loginStatus: false,
    userInfo: null
  }
})