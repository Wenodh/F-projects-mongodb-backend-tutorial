require('dotenv').config();
module.exports = {
    // HOST: 'localhost',
    // PORT: 27017,
    // DB: 'bezkoder_db',
    url: `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.3eycs.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`,
};
