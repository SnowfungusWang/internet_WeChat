// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
  const ctx = cloud.getWXContext();
  try {
    const res = await db.collection('team').add({
      data: {
        teamName: event.teamName,
        activityName: event.activityName,
        members: event.members || '',
        activityIntro: event.activityIntro,
        expectNum: event.expectNum,
        require: event.require,
        endDate: event.endDate,
        remark: event.remark || '',
        contact: event.contact,
        openid: ctx.OPENID
      }
    });
    return {
      success: true,
      msg: ''
    };
  } catch(e) {
    return {
      success: false,
      msg: e
    };
  }
}