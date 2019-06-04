// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  try {
    if (event.teamId) {
      const res = await db.collection('team').doc(event.teamId).get();
      return {
        success: true,
        msg: '',
        recruit: res.data
      };
    } else {
      return {
        success: false,
        msg: '获取招募信息失败'
      };
    }
  } catch (e) {
    return {
      success: false,
      msg: e
    };
  }
}