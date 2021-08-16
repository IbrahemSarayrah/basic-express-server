'use strict';

module.exports = (req,res,next)=> {
  console.log('Requesr Logger :', req.method , req.path);
  next();
};


