import { api } from '../../util/api'

Page({
  data: {
    text: 'This is page data.'
  },
  onLoad(options: any) {
    // Do some initialize when page load.
  },
  onReady() {
    // Do something when page ready.
  },
  onShow() {
    // Do something when page show.
  },
  onHide() {
    // Do something when page hide.
  },
  onUnload() {
    // Do something when page close.
  },
  onPullDownRefresh() {
    // Do something when pull down.
  },
  onReachBottom() {
    // Do something when page reach bottom.
  },
  onShareAppMessage() {
    return {
      title: '',
      path: '',
      imageUrl: ''
    }

  },
  onPageScroll() {
    // Do something when page scroll
  },
})