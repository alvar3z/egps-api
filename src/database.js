/*jshint esversion: 6 */
const mysql = require('mysql');
const {database} =require('./keys');
const pool =mysql.createPool(database);
pool.getConnection((err,connection)=>{
    if(err){
        console.log(err.code);
        if(err.code === 'PROTOCOL-CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS MANY CONNECTION');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
        if(err.code === 'ER_HOST_NOT_PRIVILEGED'){
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }
    if(connection){
        connection.release();
        console.log('DB IS Connected');
        return;
    }
    
  

});
module.exports =pool;