const express = require('express');


/**
 * CORS
 */
const cors = require('cors');

const whitelist = ['http://localhost:3000', 'http://example2.com']

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};


module.exports = function(app){
        
    /**
     * ROUTES
     */
    
    
    const home = require('./Routes/home');
    const contact = require('./Routes/contact');

    //app.use(cors(corsOptions));
    app.use(cors());

    app.use(express.json());
    app.use(express.urlencoded({extended: false}));   // Used with FORMS. The name of the input will be found as req.body.email


    /**
     * ROUTES
     */
    app.use('/', home);
    app.use('/', contact);
    
};