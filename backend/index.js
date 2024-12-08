import express from 'express'

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
    res.json({
        message:"Hello World"
    })
})

app.listen(PORT,() => {
    console.log(`Server listening at ${PORT}`);
})