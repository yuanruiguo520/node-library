import mongoose from 'mongoose'
import user from './user'
import book from './book'
import lendBook from './lendBook'
// mongoose.Promise = global.Promise;
mongoose.Promise = require('q').Promise;
mongoose.connect('mongodb://localhost:27017/FullStackProject',{
    useMongoClient: true,
})

export {
    user,
    book,
    lendBook
}