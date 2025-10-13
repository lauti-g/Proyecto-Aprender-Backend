import express from "express"
import { fileURLToPath } from "url";
import path from "path";
import routes from "./routes/routes.js";
import 'ejs'


const config = express()


const archivoActual = fileURLToPath(import.meta.url)
const directorioActual = path.dirname(archivoActual)

config.use(express.static(path.join(directorioActual, "../public")))
config.use(routes)



config.set("views", path.join(directorioActual, "../views"))
config.set('view engine', 'ejs')






export default config