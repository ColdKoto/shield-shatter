const mongoose    = require('mongoose'),
      fs          = require('fs'),
      models_path = __dirname + '/../models';

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/shield_shatter_db');

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
});
