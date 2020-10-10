/**
 * business routes module
 * @param {*} app 
 */
module.exports = function(app) {
  
	var express = require('express');
	var router = express.Router();
  
	router.get('/r1', function(req, res) {
		res.send('Hello /p1/r1');		
	});

	router.get('/r2', function(req, res) {
		res.send('Hello /p1/r2');		
  	});

  	const blUser = require('./bl_user.js');
  	router.post('/r3', blUser.create);

	return router;	// return router
};