const mongoose = require('mongoose')
const User = require('./models/userModel')

mongoose
  .connect(
    'mongodb+srv://hamza:x%40tAAmq$YJPnv84@goelogie-cluster.evjhgzm.mongodb.net/',
  )
  .then(() => {
    console.log('MongoDB connected')
    return User.find()
  })
  .then((users) => {
    console.log('Users:', users)
    mongoose.disconnect()
  })
  .catch((err) => {
    console.error(err)
    mongoose.disconnect()
  })
