// 云函数入口文件
const cloud = require('wx-server-sdk')
const Fuse = require('fuse.js')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database()

  var all = await cloud.callFunction({
    name: "GetAllApplication",
    data: {}
  })
  if (all.result.data.length==0){
    return {}
  }
  else{
    var options = {
      shouldSort: true,
      includeScore: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "title",
        "remark",
        "school",
        "selfDescription"
      ]
    };
    var fuse = new Fuse(all.result.data, options);
    return fuse.search(event.keywords);
  }
  
}