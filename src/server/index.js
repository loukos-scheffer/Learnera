const express = require('express');
const cookieParser = require("cookie-parser");

const mongoose = require('mongoose');
const config = require('config');
const errorHandler = require('./services/ErrorHandler');

const app = express();

if(process.env.NODE_ENV === "production") {
    const cors = require('cors');
    const corsOptions = {
        origin: 'http://asdy.joshuacarrasco.com',
        optionsSuccessStatus: 200
    }
    console.log("here");
    //app.use(cors({origin: 'http://asdy.joshuacarrasco.com', credentials: true}));
    app.use(function (req, res, next) {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://asdy.joshuacarrasco.com');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

//	res.setHeader('Access-Control-Expose-Headers', 'Authorization');
	//res.setHeader('Allow-Origin-With-Credentials', true);

        // Pass to next layer of middleware
        next();
    });

    //app.use(cors({origin: 'http://asdy.joshuacarrasco.com', credentials: true}));
}

app.use(express.json());
app.use ((error, req, res, next) => {
    //Catch json parsing error
    errorHandler.sendJsonError(res);
});

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

var videoRoutes = require('./routes/videos/video-routes');
app.use("/api/video", videoRoutes);

var likeRoutes = require('./routes/likes/like-routes');
app.use("/api/like", likeRoutes);

var conferenceRoutes = require('./routes/conferences/conference-routes');
app.use("/api/conference", conferenceRoutes);

var companyRoutes = require('./routes/company/company-routes');
app.use("/api/company", companyRoutes);

// Connect to database
mongoose.connect(config.get('dbConfig'), { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

// Listen to requests
const PORT = config.get('PORT') || process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on port ' + PORT));

