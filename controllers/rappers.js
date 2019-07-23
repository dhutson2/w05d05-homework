const express = require('express')
const router = express.Router()
const Rapper = require('../models/rappers')


router.get('/', (req, res) => {
   
    Rapper.find({}, (err, foundRapper) => {
        if(err){
            console.log(err);
            res.send(err);
        } else{
            res.render('rappers/index.ejs', {
                rappers: foundRapper
            })
        }
    })
})

// get and post route to add created rapper to list
router.get('/new', (req, res) => {
    res.render('rappers/new.ejs')
})

router.post('/', (req, res) => {
    Rapper.create(req.body, (err, createdRapper) => {
        console.log(createdRapper, '<-- created rapper')
        if(err){
            console.log(err)
        } else{
            res.redirect('/rappers')
        }
    })

    })

module.exports = router;

