/* eslint-disable no-undef */
import { Sequelize } from "sequelize";
import "dotenv/config";




const sequelize = new Sequelize(process.env.nombreDB, process.env.usuario, process.env.contrasena,{
    host: process.env.host,
    dialect: "mysql"
});


(async () => {
    try {
        await sequelize.authenticate()
        console.log("conectado a la DB")
    } catch (error) {
        console.log("no se pudo establecer la conexion",error)
    }})()



export default sequelize

