// userModel.js
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')    

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

// Avant de sauvegarder un utilisateur, hacher le mot de passe s'il a été modifié
userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next()
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
    next()
  } catch (error) {
    next(error)
  }
})

userSchema.methods.isValidPassword = async function (
  password,
) {
  try {
    return await bcrypt.compare(password, this.password)
  } catch (error) {
    throw error
  }
}

const User = mongoose.model('User', userSchema)

module.exports = User
