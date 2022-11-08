import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import expressLayouts from 'express-ejs-layouts'
import employeeRoute from './routes/employeeRoute.js'
import indexRoute from './routes/indexRoute.js'

const app = express()
const port = 3000

app.use(express.static('./public/stylesheets'))
app.set('view engine', 'ejs')

app.use(cors())
app.use(express.json())
app.use(expressLayouts)
app.use(employeeRoute)
app.use(indexRoute)

const main = async (req, res) => {
    await mongoose.connect('mongodb+srv://adiaz:nogova123@cluster0.gume9tn.mongodb.net/company?retryWrites=true&w=majority').finally(console.log('connected to database'))
}

main().catch(err => console.log(err))



app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})