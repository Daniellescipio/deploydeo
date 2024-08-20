const express = require('express')
const app = express()
const PORT = '8080'
app.use(express.json())
app.use(require('morgan')('dev'))

app.use('/api/users', require('./api/userRouter'))

app.listen(PORT, ()=>{
    console.log("the server is listening!")
})