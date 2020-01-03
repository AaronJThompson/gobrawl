const axios = require('axios');

const token = process.env.API_TOKEN;

const header = `Authorization: Bearer ${token}`;

const getPlayer = async (tag) => {
  let res = await axios.get(`https://api.brawlstars.com/v1/players/${tag}`, { headers: { header } });
  return res.data;
}

const getBattlelog = async (tag) => {
  let res = await axios.get(`https://api.brawlstars.com/v1/players/${tag}/battlelog`, { headers: { header } });
  return res.data;
}

module.exports = {
  getPlayer,
  getBattlelog
}