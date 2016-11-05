'use strict';

// create a new express router

const express      = require('express'),
  router           = express.Router(),
  mainController   = require('./controllers/main.controller'),
  eventsController = require('./controllers/events.controller');

// export the router
module.exports = router;


// define routes
// main routes
router.get('/', mainController.showHome);

// event routes
router.get('/events', eventsController.showEvents);

// seed events
router.get('/events/seed', eventsController.seedEvents);

router.get('/events/:slug', eventsController.showSingle);

// create events

// edit events

// delete events
