import express from 'express'
import Userrouter from './routes/routes.js'

const PORT = 3000

const app = express()

app.use(express.json())
app.use("/user",Userrouter)

app.get('/', (req, res) => {
    res.json({
        message:"Hello World"
    })
})



app.listen(PORT,() => {
    console.log(`Server listening at ${PORT}`);
})