//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    autoplay: true, //轮播图自动切换
    interval: 3000, //时间间隔
    duration: 1000, //滑动时长
    circular: true, //衔接
    currNumber: '1', //当前数量
    a:0,//代表默认图片显示在全部按钮上
    name:'',//定位地址
    address: '',//定位地址详情
    currImg:0,
    list: [{
      ischecked: false
    }, {
      ischecked: false
    }],
    kindList: [{
      id:1,
      name:'华为',
      checked: false
    },{
        id: 2,
        name: '小米',
        checked: false
    },
    {
      id: 3,
      name: '苹果',
      checked: false
    },
    {
      id: 4,
      name: '三星',
      checked: false
    }],
    bannerList:[
      {
        img:'http://pics.jiuziran.com/FrrFiRAFFvlf8faVUtXsfII6AWYq'
      },
      {
        img: 'http://pics.jiuziran.com/FoBH1J33y-lUbPAGYDvKiqMCIgqQ'
      },
      {
        img: 'http://pics.jiuziran.com/Fnip23kY3G-bBuymH2dvvOUOFTl3'
      },
    ]
  },
  // 点击那个按钮图片显示那个上面（普通切换）
  listBtn:function(e){
    var that=this
    var curr = e.currentTarget.dataset.index
    console.log(curr)
      that.setData({
        a: curr,
      })
  },
  // 点击那个按钮图片显示那个上面（带效果切换）
  //获取当前滑块的index
  bindchange:function(e){
    var that=this
    that.setData({
      currImg: e.detail.current
    })
  },
   //点击切换，滑块index赋值
  listBtnTwo:function(e){
    var that = this
    if (that.data.currImg == e.currentTarget.dataset.current){
      return false
    }else{
      that.setData({
        currImg: e.currentTarget.dataset.current,
      })
    }
  },

  // 点击筛选功能
  chooseDspProp: function (e) {
    var that=this
    var currIndex=e.currentTarget.dataset.index
    console.log(currIndex)
    var list = that.data.list
    list[currIndex].ischecked = !list[currIndex].ischecked
    console.log(list)
    that.setData({
      list: list
    })
  },
  // 通过for循环的效果写法
  changKind:function(e){
    var index=e.currentTarget.dataset.index
    var kindList = this.data.kindList
    kindList[index].checked = !kindList[index].checked
    this.setData({
      kindList: kindList
    })
  },
  // swiper轮播图图片的放大并显示当前为第几张图片和总数
  // 轮播图位数及总数
  bindchange: function (e) {
    let that = this
    this.setData({
      currNumber: e.detail.current + 1
    })
  },
  //点击图片放大
  previewImg: function () {
    var a=[]
    for (var i in this.data.bannerList){
      var imgUrl = this.data.bannerList[i].img
      a.push(imgUrl)
    }
    console.log(imgUrl)
    wx.previewImage({
      urls: a, //需要预览的图片http链接列表，注意是数组
      current: '', // 当前显示图片的http链接，默认是第一个
    })
  },


  // 点击定位
  addressBtn: function () {
    var that=this
    wx.chooseLocation({
      success: function(res) {
        console.log(res)
        that.setData({
          name:res.name,
          address: res.address
        })
      },
    })
  }
})

