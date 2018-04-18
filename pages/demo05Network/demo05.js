// pages/demo05Network/demo05.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  changeName(e){
    // 在此微信工具 怎么都没反应 抽风了！,多编译或者重启几次试试
        console.log(e.detail.value);
  },  
  changePwd(e){
    console.log(e.detail.value);
  },
  loadData(){
    console.log('准备请求数据了！');
    wx.request({
      url: 'https://jsonplaceholder.typicode.com/users',
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: (res)=> {
        console.log(res.data)
        var newList = this.data.array.concat(res.data);
        this.setData({
          array:newList
        })
      }
    })
  } 
})