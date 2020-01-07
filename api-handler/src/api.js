const axios = require('axios');

const token = process.env.API_TOKEN;

const headers = {
  Authorization: `Bearer ${token}`
}

const getPlayer = async (tag) => {
  let res = await axios.get(`https://api.brawlstars.com/v1/players/${tag}`.replace("#", "%23"), { headers });
  return res.data;
}

const getBattlelog = async (tag) => {
  let res = await axios.get(`https://api.brawlstars.com/v1/players/${tag}/battlelog`.replace("#", "%23"), { headers });
  return res.data.items;
}

module.exports = {
  getPlayer,
  getBattlelog
}