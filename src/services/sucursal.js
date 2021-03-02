/*jshint esversion: 6 */
const pool = require("../database");
module.exports = {
    getAllSucursal: (req, callBack) => {
        pool.query(
            `select s.*,c.comuna,c.idregion,r.region  from sucursal s join comuna c on c.idcomuna = s.idcomuna  join region r on r.idregion= c.idregion;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }, getByIdSucursal: (req, callBack) => {
        const id = req.params.id;
        pool.query(
            `select s.*,c.comuna,c.idregion,r.region  from sucursal s join comuna c on c.idcomuna = s.idcomuna  join region r on r.idregion= c.idregion where s.idSucursal=?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }, addSucursal: (req, callBack) => {
        const { sucursal, direccion, idcomuna, idcliente, grupowialon, activo } = req.body;
        pool.query(
            `INSERT into sucursal
            sucursal,direccion,idcomuna,idcliente,grupowialon,activo
            values (?,?,?,?,?,?);`,
            [sucursal,direccion,idcomuna,idcliente,grupowialon,activo],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }, editSucursal: (req, callBack) => {
        const id = req.params.id;
        const { sucursal, direccion, idcomuna, idcliente, grupowialon, activo } = req.body;
        pool.query(
            `UPDATE sucursal
            set sucursal=?,direccion=?,idcomuna=?,idcliente=?,grupowialon=?,activo=?
            where idSucursal=?;`,
            [sucursal, direccion, idcomuna, idcliente, grupowialon, activo, id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }, disableSucursal: (req, callBack) => {
        const id = req.params.id;
        const { activo } = req.body;
        pool.query(
            `UPDATE Sucursale set activo=? where idSucursale=?;`,
            [ activo, id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}