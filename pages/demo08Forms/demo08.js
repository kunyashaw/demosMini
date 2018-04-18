// pages/demo08Forms/demo08.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:"",
    userPwd:"",
    isChecked:true
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
  changUname(e){this.setData({userName:e.detail.value})},
  changUpwd(e){this.setData({userPwd:e.detail.value})},
  checkboxChange(e){
    console.log(e);
    if(e.detail.value.length>0)
    {
      this.setData({isChecked:e.detail.value[0]})
    }
    else{
      this.setData({isChecked:'no'})
    }
    
  },
  saveFavColor(e){
    console.log(e.detail.value);
  },
  saveSex(e){
    console.log(e.detail.value);
    
  },
  handleSubmit(){
    console.log(this.data);
  }
})