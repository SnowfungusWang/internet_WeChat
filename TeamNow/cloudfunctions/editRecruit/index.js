// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const res = await db.collection('team').doc(event.teamId).update({
      data: {
        teamName: event.teamName,
        activityName: event.activityName,
        activityIntro: event.activityIntro,
        expectNum: event.expectNum,
        require: event.require,
        endDate: event.endDate,
        remark: event.remark,
        contact: event.contact,
        members: event.members
      }
    });
    if (res.stats.updated == 1) {
      return {
        success: true,
        msg: ''
      };
    } else {
      return {
        success: false,
        msg: '修改用户信息失败'
      };
    }
  } catch (e) {
    console.error(e);
    return {
      success: false,
      msg: e
    };
  }
}