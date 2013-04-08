/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Find restaurants nearby.'});
};

exports.search = require('./search');
