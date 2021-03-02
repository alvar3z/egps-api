/*jshint esversion: 6 */
const pool = require("../database");
module.exports = {
    getAllRegion: (req, callBack) => {
        pool.query(
            `SELECT r.idregion,r.region FROM region r;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }, getByIdRegion: (req, callBack) => {
        const id = req.params.id;
        pool.query(
            `SELECT r.idregion,r.region FROM region r where r.idregion=?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }, addRegion: (req, callBack) => {
        const { comuna, idregion } = req.body;
        pool.query(
            `INSERT into region
            region
            values (?)`,
            [region],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }, editRegion: (req, callBack) => {
        const id = req.params.id;
        const { region } = req.body;
        pool.query(
            `UPDATE region
            set region=?
            where idregion=?;`,
            [region, id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}