// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database()
  const _ = db.command
  try {
    return await db.collection('application').where({
      _id: event.applicationId,
      userId: wxContext.OPENID
    }).remove()
  } catch (e) {
    console.error(e)
  }
}