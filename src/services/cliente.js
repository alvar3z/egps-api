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
    }, addClient: (req, callBack) => {
        const { cliente, rut, razonsocial, giro, direccion, idcomuna, activo } = req.body;
        pool.query(
            `INSERT into cliente
            cliente,rut,razonsocial,giro,direccion,idcomuna,activo
            values (?,?,?,?,?,?,?)
            where idCliente=?;`,
            [cliente, rut, razonsocial, giro, direccion, idcomuna, activo],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }, editClient: (req, callBack) => {
        const id = req.params.id;
        const { cliente, rut, razonsocial, giro, direccion, idcomuna, activo } = req.body;
        pool.query(
            `UPDATE cliente
            set cliente=?,rut=?,razonsocial=?,giro=?,direccion=?,idcomuna=?,activo=?
            where idCliente=?;`,
            [cliente, rut, razonsocial, giro, direccion, idcomuna, activo, id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }, disableClient: (req, callBack) => {
        const id = req.params.id;
        const { activo } = req.body;
        pool.query(
            `UPDATE cliente
            set activo=?
            where idCliente=?;`,
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