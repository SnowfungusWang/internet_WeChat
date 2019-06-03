// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require('request-promise');
cloud.init()

const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
  var openid = '';
  var session_key = '';
  const code = event.code;
  const appid = 'wxa0c7df5a19fbae22';
  const secret = '7a291aeff3598b4b5fa8db1dc617f4d2';
  const grant_type = 'authorization_code';
  const getOpenideUrl = 'https://api.weixin.qq.com/sns/jscode2session';
  const AccessToken_options = {
    method: 'GET',
    url: getOpenideUrl,
    qs: {
      appid: appid,
      secret: secret,
      js_code: code,
      grant_type: grant_type,
    },
    json: true
  };
  try {
    const response = await rp(AccessToken_options);
    let openid = response.openid;
    try {
      let res = await db.collection('user').add({
        data: {
          openid: openid,
          name: '',
          studentId: '',
          email: '',
          contact: '',
          intro: ''
        }
      });
      return {
        success: true,
        msg: '',
        _id: res._id
      };
    } catch(e) {
      console.error(e);
      return {
        success: false,
        msg: e
      };
    }
  } catch(e) {
    console.error(e);
    return {
      success: false,
      msg: e
    };
  }
}