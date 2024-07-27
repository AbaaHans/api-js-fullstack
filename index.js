const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express()
//midlleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//app route

app.use('/api/products', productRoute)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

app.get('/', (req, res) => {
  res.send('Hello from API JS Server Update')
})

mongoose.connect(
  'mongodb+srv://brownshans:1v85HxH3tyv59X8D@backenddb.ikcknxh.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB',
)
try {
  ;() => {
    console.log('Connected to database!!!')
  }
} catch (error) {
  console.log('Connection failde !!!')
}
