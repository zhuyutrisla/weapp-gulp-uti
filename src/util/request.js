//  request
let request = {
  get(url, data){
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        data,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          if (Number(res.data.code) === 0) {
            resolve(res.data.data)
          } else {
            wx.showToast({
              title: res.data.msg || '服务器出错了',
              icon: 'none'
            });
            reject(res.data.msg)
          }
        },
        fail(err) {
          wx.hideLoading()
          console.log(err)
          wx.showToast({
            title: '网络错误，请稍后再试',
            icon: 'none'
          });
          reject(err)
        }
      })
    })
  },
  post(url, data){
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        data,
        method: "POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success (res) {
          if (Number(res.data.code) === 0) {
            resolve(res.data.data)
          } else {
            wx.showToast({
              title: res.data.msg || '服务器出错了',
              icon: 'none'
            });
            reject(res.data.msg)
          }
        },
        fail(err) {
          wx.hideLoading()
          console.log(err)
          wx.showToast({
            title: '网络错误，请稍后再试',
            icon: 'none'
          });
          reject(err)
        }
      })
    })
  }
}

module.exports = {
  request
}