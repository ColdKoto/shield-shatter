const mongoose = require('mongoose'),
      express  = require('express'),
      bp       = require('body-parser'),
      path     = require('path'),
      root     = __dirname,
      port     = 8000,
      app      = express();

app.use(express.static(path.join(root, 'client')));
app.use(express.static(path.join(root, 'bower_components')));
app.use(bp.json());

// require('./server/config/routes.js')(app);
// require('./server/config/mongoose.js');

app.listen(port, function(){
    console.log(`server running on port ${port}`);
});
