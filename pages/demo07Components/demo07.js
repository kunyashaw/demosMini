// pages/demo07Components/demo07.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowId:'id1',
    count:1,
    imgList:[
      { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg', text: 'BMW 1' },
      { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg', text: 'BMW 2' },
      { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg', text: 'BMW 3' },
      { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg', text: 'BMW 4' },
      { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg', text: 'BMW 5' },
      { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg', text: 'BMW 6' }
    ],
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    progressValue:0,
    myHtml1:[
      {
        name:'h1',
        attrs:{
          style:"color:red"
        },
        children:[
          {type:'text',text:'hello world'}
        ]

      }
    ],
    myHtml2:"<h2>func rich text</h2>"
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
  handleUpper(e){
    console.log('往上滑动了！',e);
  },
  changeview(){
    var nowCount = this.data.count;
    nowCount++;
    if(nowCount>3){
      nowCount = 1;
    }
    this.setData({
      nowId:'id'+nowCount,
      count:nowCount
    })
  },
  modifyProgress(){
    setInterval(()=>{
      console.log(this.data.progressValue);
        var tmpValue = this.data.progressValue+=10;
        if(tmpValue>100){
          tmpValue = 0;
        }
        this.setData({progressValue:tmpValue});
    },500);
  
  }
})