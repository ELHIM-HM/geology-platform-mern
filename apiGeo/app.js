const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// import routers
const eventRouter = require('./routes/eventsRouter');
const bookRoutes = require('./routes/book.routes');
const libraryRouter = require('./routes/Admin/library.router');
const userRoutes = require('./routes/usersRoutes');
const announcementsRoutes = require('./routes/announcements');
const collectionRouter = require('./routes/collectionRouter')

// development middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// MIDDLEWARES
app.use(express.json()); // make the req.body readable
// make the req.body readable
app.use(bodyParser.urlencoded({ extended: true }))
// solving the cors problem
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');

  next();
});

// ROUTES
app.use('/api', userRoutes);
app.use('/api/events', eventRouter);
app.use('/api/library', bookRoutes);
app.use('/api/Alibrary', libraryRouter);
app.use('/api/collections', collectionRouter)
app.use('/api/announcements', announcementsRoutes);
module.exports = app

