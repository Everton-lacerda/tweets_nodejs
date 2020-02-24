const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const port = process.env.PORT || 3000
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

require('./config/database')



app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    req.io = io
    
    return next()
})

app.use(routes)

server.listen(3000, () => {
    console.log(`Server starter on port ${port}`)
})