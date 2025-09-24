/* eslint-disable no-undef */
import app from "./config.js";
import 'dotenv/config'



app.listen(process.env.PORT)

console.log(`iniciando server en puerto ${process.env.PORT}`)