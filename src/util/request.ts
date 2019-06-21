// 返回值
interface CommonResponse {
  code: number; // 返回状态码
  data: string; // 返回内容
  msg: string; // 返回错误信息
}

export const request = {
  get(url: string, data: object, type = 1): Promise<object>{
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        data,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res: any) {
          const dataResult:CommonResponse = res.data
          if (Number(dataResult.code) === 0) {
            resolve(dataResult)
          } else {
            dealWithErrorCode(dataResult, type)
            reject(dataResult)
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
  post(url: string, data: object, type = 1): Promise<object>{
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        data,
        method: "POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success (res: any) {
          const dataResult:CommonResponse = res.data
          if (Number(dataResult.code) === 0) {
            resolve(dataResult)
          } else {
            dealWithErrorCode(dataResult, type)
            reject(dataResult)
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

//  处理错误
function dealWithErrorCode(dataObj: CommonResponse, type: number): void{
  wx.hideLoading()
  //  1 要 toast 2 不用
  if (type === 1) {
    wx.showToast({
      title: dataObj.msg || '服务器出错了',
      icon: 'none'
    });
  }
}