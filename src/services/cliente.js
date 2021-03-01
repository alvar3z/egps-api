/*jshint esversion: 6 */
const pool = require("../database");
module.exports = {
    getAllClient: (req, callBack) => {
        pool.query(
            `SELECT c.*,co.comuna,co.idregion,r.region from cliente c 
            join comuna co on co.idcomuna=c.idcomuna
            join region r on r.idregion=co.idregion
            ;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }, getByIdClient: (req, callBack) => {
        const id = req.params.id;
        pool.query(
            `SELECT c.*,co.comuna,co.idregion,r.region from cliente c 
            join comuna co on co.idcomuna=c.idcomuna
            join region r on r.idregion=co.idregion where c.idCliente =?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}