const express = require('express')
const morgan = require('morgan')
const path = require('path')


const app = express()
app.use(morgan('dev'))
const port = 3000

app.use(express.static("gunting"))


// CONTOH PENGGUNAAN LOGGER (APPLICATION LEVEL MIDDLEWARE)
// ===================================================
// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`)
//     next()
// }
// app.use(logger)


// CONTOH PENGGUNAAN BUILTIN MIDDLEWARE
// =====================================
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './gunting/index.html'))
})

app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, './gunting/game.html'))
})





// app.get('/about', (req, res) => inierror
// app.get('/endpointLain', (req, res) => res.send('Lain'))


//internal server error handler
// app.use(function(err, req, res, next) {
//     console.error(err)
//     res.status(500).json({
//         status: 'fail',
//         errors: err.message
//     })
// })

// app.get('/', (req, res) => {
//     res.send('Hello world')
// })

// app.get('/products', (req, res) => {
//     res.json([
//         "Apple",
//         "Redmi",
//         "Android"
//     ])
// })

// app.get('/orders', (req, res) => {
//     res.json([
//         {
//             id: 1,
//             paid: false,
//             user_id: 1
//         },
//         {
//             id: 2,
//             paid: false,
//             user_id: 2
//         }
//     ])
// })



app.listen(port, () => console.log(`Server nyala! di port ${port}`))
