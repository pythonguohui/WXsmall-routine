//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
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
  globalData: {
    userInfo: null,
    acticle_list:[
      {
        "title": "孙悟空",
        "description": "孙悟空，来自贝吉塔行星的赛亚人，为追求强大而刻苦修行，不断与强敌战斗，成为拯救地球乃至全宇宙的英雄。",
        "picture": "/image/9.jpg"
      },
      {
        "title": "贝吉塔",
        "description": "贝吉塔，是战斗民族赛亚人的王子，拥有极高的自尊心。多次和悟空保护地球。后来学会了超级赛亚人变身，击败布欧后仍为了超越悟空而努力修行。",
        "picture": "/image/8.jpg"
      },
      {
        "title": "比克大魔王",
        "description": "比克大魔王，将整个世界推向恐怖边缘的邪恶魔王，是神仙的邪恶化身，后被孙悟空打败，临死前留下了最后王牌，就是至今的比克（笛子魔童）。",
        "picture": "/image/0.jpg"
      }
    ]
  }
})