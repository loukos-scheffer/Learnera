const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Routes
var userRoutes = require('./routes/user/user-routes');
app.use("/api/user", userRoutes);

var threadRoutes = require('./routes/threads/thread-routes');
app.use("/api/thread", threadRoutes);

var messageRoutes = require('./routes/messages/message-routes');
app.use("/api/message", messageRoutes);

// Connect to database
mongoose.connect('mongodb://localhost:27017/bruteforceDB', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

// Listen to requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on port ' + PORT));

