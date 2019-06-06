// 云函数入口文件
const cloud = require('wx-server-sdk')
const Fuse = require('fuse.js')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  var all = await cloud.callFunction({
    name: "getAllRecruit",
    data: {}
  })
  if (all.result.recruits.length == 0) {
    return {}
  }
  else {
    var options = {
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "activityIntro",
        "activityName",
        "remark",
        "require",
        "teamName"
      ]
    };
    var fuse = new Fuse(all.result.recruits, options);
    return fuse.search(event.keywords);
  }
}