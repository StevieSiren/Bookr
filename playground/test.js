const express = require('express'),
      app = express();

app.use('view engine', 'html');

app.get('/', (req, res) => {
    res.render('dashboard-user');
})

app.listen(8080, () => {
    console.log('Test server started');
});