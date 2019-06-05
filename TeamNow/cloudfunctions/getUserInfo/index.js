// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  try {
    const res = await db.collection('user').where({
      openid: wxContext.OPENID
    }).get();
    const u = res.data[0];
    return {
      success: true,
      msg: '',
      user: {
        name: u.name,
        studentId: u.studentId,
        email: u.email,
        contact: u.contact,
        intro: u.intro || '',
        _id: u._id
      }
    };
  } catch(e) {
    console.error(e);
    return {
      success: false,
      msg: e
    };
  }
}