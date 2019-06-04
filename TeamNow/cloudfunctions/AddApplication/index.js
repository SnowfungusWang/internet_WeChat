// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database()
  const _  = db.command
  try{
    return await db.collection('application').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        userId: wxContext.OPENID,
        name: event.name,
        school: event.school,
        selfDescription: event.selfDescription,
        contact: event.contact,
        title: event.title,
        remark: event.remark,
        time: new Date(event.time)
      }
    })
  }catch(err){
    console.log(err)
  }
}