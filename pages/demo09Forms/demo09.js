// pages/demo09Forms/demo09.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[100,200,300],
    nowPickNum:2,
    nowPickTime:'09:30',
    nowPickDate:'1989-03-24',
    nowPickCity:'123',
    cities:["bj","sh",'gz']
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
  handleNumChange(e){
    console.log(e.detail);
    this.setData({
      nowPickNum:e.detail.value
    })
  },
  handleChangeTime(e){
    this.setData({
      nowPickTime:e.detail.value
    })
  },
  handleChangeDate(e){
    this.setData({
      nowPickDate:e.detail.value
    })
  },
  handleChangeCity(e){
      this.setData({
        nowPickCity:e.detail.value
      });
  },
  changeVolume(e){
    console.log(e.detail.value);
  },
  handleChangeSwitch(e){
    console.log(e.detail.value);
  },
  handleSaveMsg(e){
    console.log(e.detail.value);
    
  }
})