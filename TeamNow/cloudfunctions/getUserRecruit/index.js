// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();
const _ = db.command;

const MAX_LIMIT = 100

// 云函数入口函数
exports.main = async (event, context) => {
  const ctx = cloud.getWXContext();
  try {
    const res = await db.collection('team').where({
      openid: ctx.OPENID
    }).limit(MAX_LIMIT).get();
    return {
      success: true,
      msg: '',
      recruits: res.data
    }
  } catch (e) {
    return {
      success: false,
      msg: e
    };
  }
}