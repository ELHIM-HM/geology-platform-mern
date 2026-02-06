const BookModel = require('../../models/book.model')

// Create book
module.exports.saveBook = (req, res) => {
  const {title, category, image , link } = req.body

  BookModel.create({title, category, image , link })
    .then((data) => {
      console.log('Saved Successfully ... ')
      res.status(201).send(data)
    })
    .catch((err) => {
      console.log(err)
      res.send({
        error: err,
        msg: 'Something went wrong !',
      })
    })
}

// Update book
module.exports.updateBook = (req, res) => {
  const { id } = req.params
  const {title, category, image , link } = req.body

  BookModel.findByIdAndUpdate(id, {
    title,
    category,
    image,
    link,
  })
    .then(() => res.send('Updated successfully'))
    .catch((err) => {
      console.log(err)
      res.send({
        error: err,
        msg: 'Something went wrong !',
      })
    })
}

// Delete book
module.exports.deleteBook = (req, res) => {
  const { id } = req.params

  BookModel.findByIdAndDelete(id)
    .then(() => res.send('Deleted successfully'))
    .catch((err) => {
      console.log(err)
      res.send({
        error: err,
        msg: 'Something went wrong !',
      })
    })
}


