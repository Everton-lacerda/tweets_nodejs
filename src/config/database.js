const mongoose = require('mongoose')
const {user, password} = require('./credentials')

const url = `mongodb+srv://${user}:${password}@cluster0-lqciw.mongodb.net/twitters?retryWrites=true&w=majority`
const options = { useUnifiedTopology: true, useNewUrlParser: true }

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true)

mongoose.connection.on('error', (err) => {
    console.log('Database connection error: ' + err)


})
mongoose.connection.on('disconnected', () => {
    console.log('Application disconnected from database!')
    
})
mongoose.connection.once('connected', () => {
    console.log('Application connected to the database!')

})