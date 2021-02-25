const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')
const PORT = process.env.PORT||8080


app.get('/',(req,res)=>{
    res.json({})
})

http.listen(PORT,(error)=>{
    console.log(`app en ${PORT}`);
})