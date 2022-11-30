const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const mypw = ""  // set mypw to the hr schema password

async function run() {

  let connection;

  try {
    connection = await oracledb.getConnection( {
      user          : "your company oracle db username or your db username",
      password      : mypw,
      connectString : "company DB IP or your system DB IP : Specified PortNumber / ServiceName"
    });

    const result = await connection.execute(
      `SELECT *
       FROM TABLE_DATA  
     `,
      [], 
    );
    console.log(result.rows);
    
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();