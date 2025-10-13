import express from "express"


const router = express.Router()

    
router.get("/", (req, res)=>{
    const hola = {
        "hola" : "hola todo bien?"
    }
    console.log("sirviendo")
    res.render("index", hola)
})


export default router