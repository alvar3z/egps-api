/*jshint esversion: 6 */
const pool = require("../database");
module.exports = {
    getAllComuna: (req, callBack) => {
        pool.query(
            `SELECT r.idregion,r.region,c.idcomuna,c.comuna FROM comuna c join region r on r.idregion= c.idregion;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }, getByIdComuna: (req, callBack) => {
        const id = req.params.id;
        pool.query(
            `SELECT r.idregion,r.region,c.idcomuna,c.comuna FROM comuna c join region r on r.idregion= c.idregion where c.idcomuna=?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }, addComuna: (req, callBack) => {
        const { comuna, idregion } = req.body;
        pool.query(
            `INSERT into comuna comuna,idregion values (?,?)`,
            [comuna, idregion],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }, editComuna: (req, callBack) => {
        const id = req.params.id;
        const { comuna, idregion } = req.body;
        pool.query(
            `UPDATE comuna
            set comuna=?,idregion=?
            where idcomuna=?;`,
            [comuna, idregion, id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}