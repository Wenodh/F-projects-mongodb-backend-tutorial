require('dotenv').config();
module.exports = {
    url: `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.3eycs.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`,
};
