var pool = require("./db"); //llamando datos BD

async function getNovedades() {
  var query = "select * from novedades order by id desc";
  var rows = await pool.query(query);
  return rows;
}

async function insertNovedad(obj) {
  try {
    var query = "insert into novedades set ?";
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = { getNovedades, deleteNovedadById, insertNovedad };
