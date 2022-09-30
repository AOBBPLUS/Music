// pages/index/index.js
import request from "../../utils/request";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bannerList: [],//banner数组
        recommendList: [],//推荐歌单数据
        topList: [],//排行榜数据
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function(options) {
        let bannerListData = await request('/banner', {type: 2});
        this.setData({
            bannerList: bannerListData.banners
        })
        //获取推荐歌单数据
        let recommendListData = await request('/personalized', {limit: 10});
        this.setData({
            recommendList: recommendListData.result
        })
        //获取排行榜数据
        /*
         *idx取值范围是0-20，在此需要0-4
         * 发送5此请求
         */
        // let index = 0;
        // let idArr = [];
        let result = [];
        // while (index < 5){
        //     let topListData = await  request('/toplist/detail')
        //     //截取前几条数据部分内容，slice截取内容包含起始位置，不包括结束
        //     let topListItem = {name: topListData.list.name, tracks: topListData.list.tracks}
        //     finalArr.push(topListItem);
        // }

        //截取前几条数据部分内容，slice截取内容包含起始位置，不包括结束
        //let topListItem = {name: topListData.list.name, tracks: topListData.list.tracks}
        //更新topList
        //获取榜单id
        //console.log(idArr)
        //console.log(idArr[1].id)
        let i = 0;
        while (i < 5){
            let topListData = await  request('/toplist')
            //console.log(topListData.list[index].id)
            // let topListItem1 = {id: topListData.list[i].id}
            let finaltopListData = await request('/playlist/detail?id=' + topListData.list[i].id)
            //console.log(finaltopListData)
            let topListItem2 = {name: finaltopListData.playlist.name, tracks: finaltopListData.playlist.tracks.slice(0, 3)}
            result.push(topListItem2)

            this.setData({
                topList: result
            })
            i++
        }

        //console.log(topListData.list)


    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})