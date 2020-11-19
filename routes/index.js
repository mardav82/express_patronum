var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { titulo: 'Express' });
});

router.get('/agregar', (req,res)=>{
res.render('pages/agregar', { titulo:'estas en agregar'});
});

router.get('/busqueda_proceso', (req,res)=>{
  console.log(req.query.termino);
  res.send('vas bien!');
  });


   router.post('/agregar_proceso', (req,res) =>{
     console.log(req.body);
     res.send('vas bien, estas en el post');
   });
module.exports = router;
