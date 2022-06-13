const express = require('express');
const app = express();
const session = require('express-session');

// Discoment if works locally (without container)
require('dotenv').config({ path: __dirname + '/../.env' });

// const util = require('util');
const flash = require('connect-flash');
// const methodOverride = require('method-override');


/**
 * Sessions
 */
var sessionMiddleware = session({
    secret: 'this_could_be_in_the_env_file',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 86400000 } // 24h
});
app.use(sessionMiddleware);
app.use(flash());


/**
    Load Module Routes
*/
require('./Modules/Minimarket/routes')(app);



/**
 *  ---------------------------------------------------------------------------------------
 * Sistema de plantillas HBS (habilitandolo por defecto en EXPRESS)
 */
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.set("views", __dirname + "/Modules/Minimarket/Views");

hbs.registerPartials(__dirname + '/Modules/Minimarket/Views/partials', function (err) { });

app.use(express.static(__dirname + "/Modules/Minimarket/public"));
/***
 * ---------------------------------------------------------------------------------------
 */


/**
 * Test Routes
 */
app.get('/server/test-route', (req, res) => {

    res.send('working');
});


/**
 * Error 404
 */
app.use(function (req, res, next) {
    res.status(404);
    res.render('errors/404', {

    });
});


async function checkConfigVariables() {
    try {
        
        if (!process.env.SYSTEM_PORT) {
            throw new Error('FATAL ERROR: SYSTEM_PORT is not defined.');
        }
        return true;

    } catch (err) {
        console.log(err);
        return false
    }
}


function listenServer(port = process.env.SYSTEM_PORT2) {
    app.listen(
        port, () => console.log(`Listening on port ${port}...`)
    );
}

async function main() {
    try {
        await checkConfigVariables();
        listenServer(process.env.PORT);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

main();

