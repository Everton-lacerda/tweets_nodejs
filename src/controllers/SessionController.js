const jwt = require('jsonwebtoken')
const Yup = require('yup')

const User = require('../models/Users')

const bcrypt = require('bcryptjs')
const AuthConfig = require('../config/auth')

module.exports =  {
    async store(req, res) {
        const Schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required()
        })        
        
        if(!(await Schema.isValid(req.body))){
            return res.status(400).json({error: 'Validation fails'})
        }
        const {email, password} = req.body
        console.log(email)

        const user = await User.findOne({  email: email  })
        

        if (!user) {
            return res.status(401).json({ error: 'User not found' })
        }

        
        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'password does not match' })
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email,
            },
            token: jwt.sign({ id }, AuthConfig.secret, {
                expiresIn: AuthConfig.expiresIn
            })
        })
    }
}