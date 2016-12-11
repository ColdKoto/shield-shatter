console.log('linked to mongoose!');

const mongoose    = require('mongoose'),
      fs          = require('fs'),
      path        = require('path'),
      models_path = path.join(__dirname, '../models'),
      regex       = new RegExp('.js$', 'i'),
      dbURI       = 'mongodb://localhost/shield_shatter';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    console.log(`Mongoose default connection set at: ${dbURI}`);
});

mongoose.connection.on('error', function(error){
    console.error(`Mongoose error: ${err}`);
});

mongoose.connection.on( 'disconnected', function(){
    console.log('Mongoose has disconnected UNEXPECTEDLY');
});

process.on('SIGINT', function(){
    mongoose.connection.close(function() {
        console.log('Mongoose has disconnected EXPECTEDLY');
        process.exit( 0 );
    });
});

// fs.readdirSync(models_path).forEach(function(file){
//     if(regex.test(file)){
//         require(path.join(models_path, file));
//     }
// });
