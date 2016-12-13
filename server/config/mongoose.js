const mongoose    = require('mongoose'),
      path        = require('path'),
      models_path = path.join(__dirname, '../models'),
      fs          = require('fs');

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/shield_shatter_db');

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
});
