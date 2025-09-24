import router from "../controllers/controllers.js"
import express from "express"

const rutas = express.Router()

rutas.use("/", router)


export default rutas