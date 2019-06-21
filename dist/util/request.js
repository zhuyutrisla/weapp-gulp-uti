"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = {
    get: function (url, data, type) {
        if (type === void 0) { type = 1; }
        return new Promise(function (resolve, reject) {
            wx.request({
                url: url,
                data: data,
                header: {
                    'content-type': 'application/json'
                },
                success: function (res) {
                    var dataResult = res.data;
                    if (Number(dataResult.code) === 0) {
                        resolve(dataResult);
                    }
                    else {
                        dealWithErrorCode(dataResult, type);
                        reject(dataResult);
                    }
                },
                fail: function (err) {
                    wx.hideLoading();
                    console.log(err);
                    wx.showToast({
                        title: '网络错误，请稍后再试',
                        icon: 'none'
                    });
                    reject(err);
                }
            });
        });
    },
    post: function (url, data, type) {
        if (type === void 0) { type = 1; }
        return new Promise(function (resolve, reject) {
            wx.request({
                url: url,
                data: data,
                method: "POST",
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                success: function (res) {
                    var dataResult = res.data;
                    if (Number(dataResult.code) === 0) {
                        resolve(dataResult);
                    }
                    else {
                        dealWithErrorCode(dataResult, type);
                        reject(dataResult);
                    }
                },
                fail: function (err) {
                    wx.hideLoading();
                    console.log(err);
                    wx.showToast({
                        title: '网络错误，请稍后再试',
                        icon: 'none'
                    });
                    reject(err);
                }
            });
        });
    }
};
function dealWithErrorCode(dataObj, type) {
    wx.hideLoading();
    if (type === 1) {
        wx.showToast({
            title: dataObj.msg || '服务器出错了',
            icon: 'none'
        });
    }
}
