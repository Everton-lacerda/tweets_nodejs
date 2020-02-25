const express = require('express')

const routes = express.Router()

const TweetController = require('./controllers/TweetController')
const UserController = require('./controllers/UserController')
const SessionController = require('./controllers/SessionController')
const LikeController = require('./controllers/LikeController')


routes.post('/user', UserController.store)
routes.post('/sessions', SessionController.store)

routes.use(require('./middlewares/auth'))

routes.get('/tweets', TweetController.index)
routes.post('/tweet', TweetController.store)

routes.post('/likes/:id', LikeController.store)

routes.get('/users', UserController.index)



module.exports = routes