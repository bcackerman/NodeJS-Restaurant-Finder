var logic = require('services');

/*
 * POST results
 */

exports.results = function(req, res){
	res.render('search/results', { title: 'Find restaurants nearby.' }, logic.restaurantFinder(req.body.address));
}


