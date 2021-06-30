const express = require('express');
const cookieParser = require("cookie-parser");
const session = require('express-session');

const path = require('path');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
app.use(express.json());
app.use(cookieParser());

// Routes
var userRoutes = require('./routes/user/user-routes');
app.use("/api/user", userRoutes);

var threadRoutes = require('./routes/threads/thread-routes');
app.use("/api/thread", threadRoutes);

var messageRoutes = require('./routes/messages/message-routes');
app.use("/api/message", messageRoutes);

var commentRoutes = require('./routes/comments/comment-routes');
app.use("/api/comment", commentRoutes);

// Connect to database
mongoose.connect(config.get('dbConfig'), { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

// Listen to requests
const PORT = config.get('PORT') || process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on port ' + PORT));

