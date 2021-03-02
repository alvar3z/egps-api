/*jshint esversion: 6 */
const { getAllSucursal, getByIdSucursal,disableSucursal,addSucursal,editSucursal } = require('../services/sucursal');

module.exports = {
    getAll: (req, res) => {
        getAllSucursal(req, (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: false,
                    message: "500 , Database connection error"
                });
            }
            if (!results || results.length === 0) {
                return res.status(204).json({
                    success: true,
                    message: '204 No hay Resultados'
                });
            }
            return res.status(200).json({
                success: true,
                message: "200 OK",
                data: results
            });

        });
    },getById: (req, res) => {
        getByIdSucursal(req, (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: false,
                    message: "500 , Database connection error"
                });
            }
            if (!results || results.length === 0) {
                return res.status(204).json({
                    success: true,
                    message: '204 No hay Resultados'
                });
            }
            return res.status(200).json({
                success: true,
                message: "200 OK",
                data: results
            });

        });
    },add: (req, res) => {
        addSucursal(req, (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: false,
                    message: "500 , Database connection error"
                });
            }
            return res.status(201).json({
                success: true,
                message: "200 OK",
                data: results
            });

        });
    },edit: (req, res) => {
        editSucursal(req, (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: false,
                    message: "500 , Database connection error"
                });
            }
            return res.status(200).json({
                success: true,
                message: "200 OK",
                data: results
            });

        });
    },changeStatus: (req, res) => {
        disableSucursal(req, (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: false,
                    message: "500 , Database connection error"
                });
            }
            return res.status(200).json({
                success: true,
                message: "200 OK",
                data: results
            });

        });
    }
}