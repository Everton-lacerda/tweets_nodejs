const mongoose = require('mongoose')

const url = 'mongodb+srv://usuario_admin:everton3b@cluster0-lqciw.mongodb.net/twitters?retryWrites=true&w=majority'
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