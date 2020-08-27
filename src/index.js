var express = require('express');
    res.send('Hello World!');
  });

  require('./routes.js')(app);

app.listen(3000);
console.log("Jammin\' on port 3000...");
