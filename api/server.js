const express = require('express')
const cors = require('cors')
const shortid = require('shortid')
const server = express()
server.use(express.json())
server.use(cors)

const initializeUsers = (() => {
    [
        {id:shortid.generate(), username: 'user1', password: '12345'},
        {id:shortid.generate(), username: 'user2', password: '123456'},
        {id:shortid.generate(), username: 'user3', password: '123457'}
    ]
})

let users = initializeUsers()

server.get('/api/users', (req, res) => {
    res.status(200).json({message:'wip'})
    
    // return Promise.resolve(users)
    // .then(usersFound => res.status(200).json(usersFound))
    // .catch(err => res.status(500).json({message:'users not found'}))
})

server.post('/api/register', (req, res) => {
    res.status(200).json({message:'wip'})
    
    // const { username, password } = req.body

    // !username || !password ? res.status(400).json({ message: "provide username and pw for the user" })
    // : users.push({id: shortid.generate(), req.body}]
    // return Promise.resolve(newUser)
    // .then(user => res.status(201).json(user))
    // .catch(err => 
    //     res.status(500).json({message:'There was an error while saving the user to the database'}))
})

server.post('/api/login', (req, res) => {
    res.status(200).json({message:'wip'})
})

module.exports = server