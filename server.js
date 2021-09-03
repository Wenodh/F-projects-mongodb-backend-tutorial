require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./app/models');

const corsOptions = {
    origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const Role = db.role;

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to the database!');
        initial();
    })
    .catch((err) => {
        console.log('Cannot connect to the database!', err);
        process.exit();
    });

app.get('/', (q, s) => {
    s.json({
        message: 'server running',
    });
});

require('./app/routes/tutorial.routes')(app);
require('./app/routes/stories.routes')(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: 'user',
            }).save((err) => {
                if (err) {
                    console.log('error', err);
                }
                console.log("added 'user to roles collection");
            });
            new Role({
                name: 'moderator',
            }).save((err) => {
                if (err) {
                    console.log('error', err);
                }

                console.log("added 'moderator' to roles collection");
            });
            new Role({
                name: 'admin',
            }).save((err) => {
                if (err) {
                    console.log('error', err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}
