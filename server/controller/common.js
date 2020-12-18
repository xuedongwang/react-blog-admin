
const { mock, Random } = require('mockjs');
const request = require('request-promise');
const fs = require('fs');
const APPID = 'wx0518555b41fcf519';
const APPSECRET = 'fef149b50b628b79518cb0571bcd691c';
// wx0518555b41fcf519
// fef149b50b628b79518cb0571bcd691c
// access_token https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
// https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx0518555b41fcf519&secret=fef149b50b628b79518cb0571bcd691c
// https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=ACCESS_TOKEN
const GET_ACCESS_TOKEN = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${APPID}&secret=${APPSECRET}`
const GET_QR_CODE = (access_token) => `https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=${access_token}`;

function bufferToImg (buffer) {
  return `data:image/png;base64,${Buffer.from(buffer).toString('base64')}`
}

module.exports = {
  qrCode: async ctx => {
    const { access_token } = await request({
      uri: GET_ACCESS_TOKEN,
      json: true
    });
    const options = {
      method: 'POST',
      uri: GET_QR_CODE(access_token),
      body: {
        scene: Date.now(),
        // page: 'pages/index/index',
        width: 200
      },
      encoding: null,
      json: true
    }
    const res = await request(options);
    ctx.body = {
      code: 0,
      data: {
        url: bufferToImg(res)
      }
    }
  },
  statistics: async ctx => {
    ctx.body = {
      code: 0,
      data: mock({
        articleCount: () => Random.natural(),
        categoryCount: () => Random.natural(),
        commentCount: () => Random.natural(),
      })
    }
  }
}