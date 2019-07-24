const express = require('express')
const router = express.Router()
const Rapper = require('../models/rappers')


//index route
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

// get and post route to POST created rapper to list
// then GET home page with newly updated list

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

    router.get('/new', (req, res) => {
        res.render('rappers/new.ejs')
    })


// show route.. could add new attributes to model then display those
router.get('/:id', (req,res) =>{
    // res.send('here is id page')
    Rapper.findById(req.params.id, (err, foundRapper) => {
        // console.log(req.params.id)
        res.render('rappers/show.ejs', {
            rappers: foundRapper
    })
    })
})

// route to GET edit page to change attributes
router.get('/:id/edit', (req,res) => {
    Rapper.findById(req.params.id, (err, foundRapper) => {
        if(err){
            console.log(err)
        } else{
            res.render('rappers/edit.ejs', {
                rapper: foundRapper
            })
        }
    })
})

// route to PUT updated rapper into list
router.put('/:id', (req, res)=>{
    Rapper.findByIdAndUpdate(req.params.id, req.body, (err, foundRapper)=>{
      if(err){
        res.send(err);
      } else {
          console.log(foundRapper, '<-- found rapper')
        res.redirect('/rappers')
      }
  
    });
  });

//delete route to take one off list
router.delete('/:id', (req, res) => {
    console.log(req.params.id)
    Rapper.findByIdAndDelete(req.params.id, (err, deletedRapper) => {
        if(err){
            console.log(err)
        } else{
            console.log(deletedRapper, '<-- deleted rapper')
            res.redirect('/rappers')
        }
    })
})

module.exports = router;

