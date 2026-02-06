const dotenv = require('dotenv')

const mongoose = require('mongoose')

dotenv.config({ path: './config.env' }) // get called only once

const app = require('./app')

const cors = require('cors');

app.use(cors()) ; 

const DB = process.env.DATABASE

// DB CONNECTION
mongoose
  .connect(DB)
  .then((con) => {
    console.log('DB CONNECTION SECCESSFUL')
  })
  .catch((err) => {
    console.log(err)
    console.log('DB IS NOT CONNECTED')
  })

// START THE SERVER
const port = process.env.port || 3000
app.listen(port, () => {
  console.log(`app running on port ${port}`)
})
