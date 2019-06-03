// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const res = await db.collection('team').doc(event.teamId).remove({
      success: res => {
        return {
          success: true,
          msg: ''
        };
      },
      fail: err => {
        return {
          success: false,
          msg: err
        };
      }
    })
  } catch(e) {
    console.error(e)
    return {
      success: false,
      msg: e
    };
  }
}