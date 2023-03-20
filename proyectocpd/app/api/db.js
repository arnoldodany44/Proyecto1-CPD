const oracledb = require('oracledb');
async function getConnection() {
  const connection = await oracledb.getConnection({
    user: 'SYSTEM',
    password: 'root',
    connectString: 'localhost/XE'
  });
  return connection;
}
module.exports = {
  getConnection
};