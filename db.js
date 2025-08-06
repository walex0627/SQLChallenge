// Importar la libreria mysql para poder utilizar y crear la conexion
// Importar la libreria express para poder comunicarnos con ella
import mysql from 'mysql2/promise';
import express from 'express';

//Para inicializar express
export const app = express()

// Creo una variable donde guardo la conexion con el host y los usuarios, quemo la database para solo utilizar esa 
export const  connection = await mysql.createConnection({
    host: 'btltffvnrbjlkhuytao0-mysql.services.clever-cloud.com',
    user: 'ueethmaif3auncve',
    password: 'xNsAX4Vfdb8Fo8JfCnii',
    database: 'btltffvnrbjlkhuytao0'
});

console.log('conexion correcta');
