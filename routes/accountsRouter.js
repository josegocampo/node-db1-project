const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();


router.get('/', async (req, res, next) =>{
    try{
        const accounts = await db.select("*").from("accounts")
        res.json(accounts)
    }
    catch(err){
        next(err)
    }
        db.select("*").from()
})

router.get('/:id', async (req, res, next) => {
    try{
        const id = await db.select("*").from("accounts").where("id", req.params.id)
        res.json(id)
       
    }
    catch(err){
        next(err)
    }
})

router.post("/", async (req, res, next) => { 
      const payload = {
          name : req.body.name,
          budget: req.body.budget,
       }
    try{
        const [id] = await db("accounts").insert(payload)
        const newAccount = await db("accounts").where("id", id).first()
        res.json(newAccount)
    }catch(err){
        next(err)
    }
})
    

router.put('/:id', async (req, res, next) => {
    const payload = {
        name : req.body.name,
        budget: req.body.budget,
     }    
    try{
        await db("accounts").where("id", req.params.id).update(payload)
        const account = await db("accounts").where("id", req.params.id).first()
        res.json(account)
     }
     catch(err){
         next(err)
     }
})

router.delete('/id', async (req, res, next) =>{
     try{
        await db("accounts").where("id", req.params.id).del()
     }
     catch(err){
         next(err)
     }
})




module.exports = router;