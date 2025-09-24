import express from "express"


const router = express.Router()


router.get("/", (req, res)=>{
    console.log("sirviendo")
    res.render("index")
})


export default router