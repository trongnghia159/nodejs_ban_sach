const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const port = 3000;

// Set static path
                        app.use(express.static(path.join(__dirname, 'public')));

// Set template engine
const hbs = handlebars.create({
    partialsDir: ['resources/views/partials/'],
    extname: '.hbs',
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Router
route(app);

// Morgan (For debug)
app.use(morgan('combined'));
app.listen(port, () =>
    console.log(`Example app listening to http://localhost:${port}`),
);
