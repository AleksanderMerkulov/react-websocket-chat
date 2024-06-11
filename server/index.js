const express = require('express')
const app = express()
const PORT = 5000

app.get('api', (req, res)=>{
    return res.json({
        message: 'Hello'
    })
})

app.listen(PORT, ()=>{
    console.log('Server is working')
})