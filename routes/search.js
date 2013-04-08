var logic = require('services');

/*
 * POST results
 */

exports.results = function(req, res){
	result = logic.restaurantFinder(req.body.address);
	console.log('here'+result);
	res.render('search/results', { title: 'Find restaurants nearby.', results: result});
};

