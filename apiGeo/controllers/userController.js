// userController.js
const User = require('../models/userModel')

// Contrôleur pour la connexion de l'utilisateur
const loginUser = async (req, res) => {
  const { username, password } = req.body
  try {
    // Vérifier si l'utilisateur existe en recherchant uniquement par le nom d'utilisateur
    const user = await User.findOne({ username })
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Invalid username or password' })
    }
    // Si l'utilisateur existe, vérifier le mot de passe
    const isPasswordValid = await user.isValidPassword(
      password,
    )
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: 'Invalid username or password' })
    }
    // Si le mot de passe est valide, rediriger l'utilisateur vers le tableau de bord de l'administrateur
    res.redirect('https://administration-kcnk.onrender.com/dashboard') // Assurez-vous de rediriger correctement vers le bon URL du tableau de bord
  } catch (error) {
    console.error('Error logging in user:', error)
    res
      .status(500)
      .json({ message: 'Internal server error' })
  }
}

module.exports = { loginUser }
