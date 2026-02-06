const mongoose = require('mongoose')
const User = require('./models/userModel')

mongoose
  .connect(
    'mongodb+srv://hamza:x%40tAAmq$YJPnv84@goelogie-cluster.evjhgzm.mongodb.net/',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => {
    console.log('MongoDB connected')
    return User.create({
      username: 'admin',
      password: 'admin123',
    })
  })
  .then((user) => {
    console.log('User created:', user)
    mongoose.disconnect()
  })
  .catch((err) => {
    console.error(err)
    mongoose.disconnect()
  })
