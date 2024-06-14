const express = require('express')
const app = express()
const PORT = 5000

const http = require('http').Server(app)
const cors = require('cors')
const socketIO = require('socket.io')(http, {
    cors: {
        origin: [
            `http://127.0.0.1:5173`,
            `http://localhost:5173`]
        // origin:
    }
})

app.get('api', (req, res)=>{
    res.json({
        message: 'Hello'
    })
})

socketIO.on('connection', (socket)=>{
    console.log(`${socket.id} user is connected`)
    socket.on('disconnect', (socket)=>{
        console.log(`${socket.id} user disconnected`)
    })
})


http.listen(PORT, ()=>{
    console.log('Server is working')
})