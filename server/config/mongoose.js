const mongoose    = require('mongoose'),
      models_path = path.join(__dirname, '../models'),
      fs          = require('fs'),
      path        = require('path');

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/mini_store_db');

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
});
