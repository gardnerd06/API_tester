const { connect, connection } = require('mongoose');

const dbConnection = process.env.MONGODB_URI || 'mongodb://localhost/tester_db';

connect(dbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;