// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const res = await db.collection('team').doc(event.teamId).remove();
    if (res.stats.removed == 1) {
      return {
        success: true,
        msg: ''
      };
    } else {
      return {
        success: false,
        msg: '删除招募信息失败'
      };
    }
  } catch(e) {
    console.error(e)
    return {
      success: false,
      msg: e
    };
  }
}