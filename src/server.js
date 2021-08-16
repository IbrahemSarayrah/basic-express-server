'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const validator = require('./middleware/validator');
const logger = require('./middleware/logger');

app.use(logger);

app.get('/', (req,res)=>{
  res.status(200).send('Working...');
});


// http://localhost:3000?name=ibrahem

app.get('/person',validator ,(req,res)=>{

  res.json({
    name:req.query.name,
  });

});

app.get('/bad',(req, res, next)=> {
  next ('Error Bad End Point');
});

app.use('*' , notFoundHandler);
app.use(errorHandler);



module.exports= {
  server: app,
  start : port =>{
    app.listen(port,()=> console.log(`listen on port ${port}`));
  },
};