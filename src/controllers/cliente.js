/*jshint esversion: 6 */
const { getAllClient, getByIdClient,disableClient,addClient,editClient } = require('../services/cliente');

module.exports = {
    getAll: (req, res) => {
        getAllClient(req, (error, results) => {
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
        getByIdClient(req, (error, results) => {
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
        addClient(req, (error, results) => {
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
        editClient(req, (error, results) => {
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
        disableClient(req, (error, results) => {
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