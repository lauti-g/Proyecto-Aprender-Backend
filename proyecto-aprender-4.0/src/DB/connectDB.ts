/* eslint-disable no-undef */
import { Sequelize } from "sequelize";
import "dotenv/config";




const sequelize = new Sequelize(process.env.NOMBREDB || "schema", 
    process.env.USUARIO || "root", 
    process.env.CONTRASENA || "1234",
    {
    host: process.env.HOST || "localhost",
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

