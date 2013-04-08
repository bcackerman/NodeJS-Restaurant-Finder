var logic = require('services');

/*
 * POST results
 */

exports.results = function(req, res){
	logic.restaurantFinder(req.body.address, function(result){
		var restaurants = result;
		console.log('here'+restaurants);
		res.render('search/results', { title: 'Find restaurants nearby.', results: restaurants});
	});
};

