import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import axios from 'axios'
import FileBase from 'react-file-base64'

function Library() {
  const baseURL = 'https://apigeo.onrender.com/api/Alibrary'

  const [books, setBooks] = useState([])
  const [originalBooks, setOriginalBooks] = useState([])
  const [show, setShow] = useState(false)
  const [showUpdate, setShowUpdate] = useState(false)
  const [currentBook, setCurrentBook] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    link: '',
    image: '',
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(baseURL)
        setBooks(response.data)
        setOriginalBooks(response.data)
      } catch (error) {
        console.error('Error fetching books:', error)
      }
    }

    fetchBooks()
  }, [])

  const handleClose = () => setShow(false)
  const handleShow = () => {
    setFormData({
      title: '',
      category: '',
      link: '',
      image: '',
    })
    setErrors({})
    setShow(true)
  }

  const handleUpdateClose = () => setShowUpdate(false)
  const handleUpdateShow = (book) => {
    setCurrentBook(book)
    setFormData(book)
    setErrors({})
    setShowUpdate(true)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileUpload = (file) => {
    setFormData({ ...formData, image: file.base64 })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.title)
      newErrors.title = 'Title is required'
    if (!formData.category)
      newErrors.category = 'Category is required'
    if (!formData.link) newErrors.link = 'Link is required'
    if (!formData.image)
      newErrors.image = 'Image is required'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post(
          `${baseURL}/save`,
          formData,
        )
        setBooks([...books, response.data])
        handleClose()
      } catch (error) {
        console.error('Error adding book/article:', error)
      }
    } else {
      setErrors(formErrors)
    }
  }

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length === 0) {
      try {
        await axios.put(
          `${baseURL}/update/${currentBook._id}`,
          formData,
        )
        setBooks(
          books.map((book) =>
            book._id === currentBook._id
              ? { ...book, ...formData }
              : book,
          ),
        )
        handleUpdateClose()
      } catch (error) {
        console.error('Error updating book/article:', error)
      }
    } else {
      setErrors(formErrors)
    }
  }

  const handleDelete = async (id) => {
    if (
      window.confirm(
        'Are you sure you want to delete this book/article?',
      )
    ) {
      try {
        await axios.delete(`${baseURL}/delete/${id}`)
        setBooks(books.filter((book) => book._id !== id))
      } catch (error) {
        console.error('Error deleting book/article:', error)
      }
    }
  }

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase()
    const filteredBooks = originalBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(keyword) ||
        book.category.toLowerCase().includes(keyword),
    )
    setBooks(filteredBooks)
  }

  return (
    <div className='container'>
      <div className='crud shadow-lg p-3 mb-5 mt-5 bg-body rounded'>
        <div className='row'>
          <div className='col-sm-3 mt-5 mb-4 text-gred'>
            <div className='search'>
              <form className='form-inline'>
                <Form.Control
                  type='search'
                  placeholder='Search Book/Article'
                  aria-label='Search'
                  onChange={handleSearch}
                />
              </form>
            </div>
          </div>
          <div
            className='col-sm-3 offset-sm-2 mt-5 mb-4 text-gred'
            style={{ color: 'green' }}
          >
            <h2>
              <b>Library Details</b>
            </h2>
          </div>
          <div className='col-sm-3 offset-sm-1 mt-5 mb-4 text-gred'>
            <Button variant='primary' onClick={handleShow}>
              Add New Book/Article
            </Button>
          </div>
        </div>
        <div className='row'>
          <div className='table-responsive'>
            <table className='table table-striped table-hover table-bordered'>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Deposed at</th>
                  <th>Link</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={book._id}>
                    <td>{index + 1}</td>
                    <td>{book.title}</td>
                    <td>{book.category}</td>
                    <td>
                      <img
                        src={book.image}
                        alt={book.title}
                        style={{
                          width: '50px',
                          height: '50px',
                        }}
                      />
                    </td>
                    <td>
                      {book.deposit}
                    </td>
                    <td>
                      <a
                        href={book.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {book.link}
                      </a>
                    </td>
                    <td>
                      <a
                        href='#'
                        className='edit'
                        title='Edit'
                        data-toggle='tooltip'
                        onClick={() =>
                          handleUpdateShow(book)
                        }
                      >
                        <i className='material-icons'>
                          &#xE254;
                        </i>
                      </a>
                      <a
                        href='#'
                        className='delete'
                        title='Delete'
                        data-toggle='tooltip'
                        style={{ color: 'red' }}
                        onClick={() =>
                          handleDelete(book._id)
                        }
                      >
                        <i className='material-icons'>
                          &#xE872;
                        </i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Book/Article Modal */}
        <div className='model_box'>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop='static'
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Book/Article</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit}>
                <div className='form-group mt-3'>
                  <Form.Control
                    type='text'
                    placeholder='Enter Title'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                  />
                  {errors.title && (
                    <div className='text-danger'>
                      {errors.title}
                    </div>
                  )}
                </div>
                <div className='form-group mt-3'>
                  <Form.Control
                    type='text'
                    placeholder='Enter Category'
                    name='category'
                    value={formData.category}
                    onChange={handleChange}
                  />
                  {errors.category && (
                    <div className='text-danger'>
                      {errors.category}
                    </div>
                  )}
                </div>
                <div className='form-group mt-3'>
                  <Form.Control
                    type='text'
                    placeholder='Enter link'
                    name='link'
                    value={formData.link}
                    onChange={handleChange}
                  />
                  {errors.link && (
                    <div className='text-danger'>
                      {errors.link}
                    </div>
                  )}
                </div>
                <div className='form-group mt-3'>
                  <FileBase
                    type='file'
                    multiple={false}
                    onDone={handleFileUpload}
                  />
                  {errors.image && (
                    <div className='text-danger'>
                      {errors.image}
                    </div>
                  )}
                </div>

                <Button
                  type='submit'
                  className='btn btn-success mt-4'
                >
                  Add Record
                </Button>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant='secondary'
                onClick={handleClose}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        {/* Update Book/Article Modal */}
        <div className='model_box'>
          <Modal
            show={showUpdate}
            onHide={handleUpdateClose}
            backdrop='static'
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Update Book/Article</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleUpdateSubmit}>
                <div className='form-group mt-3'>
                  <Form.Control
                    type='text'
                    placeholder='Enter Title'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                  />
                  {errors.title && (
                    <div className='text-danger'>
                      {errors.title}
                    </div>
                  )}
                </div>
                <div className='form-group mt-3'>
                  <Form.Control
                    type='text'
                    placeholder='Enter Category'
                    name='category'
                    value={formData.category}
                    onChange={handleChange}
                  />
                  {errors.category && (
                    <div className='text-danger'>
                      {errors.category}
                    </div>
                  )}
                </div>
                <div className='form-group mt-3'>
                  <Form.Control
                    type='text'
                    placeholder='Enter link'
                    name='link'
                    value={formData.link}
                    onChange={handleChange}
                  />
                  {errors.link && (
                    <div className='text-danger'>
                      {errors.link}
                    </div>
                  )}
                </div>
                <div className='form-group mt-3'>
                  <FileBase
                    type='file'
                    multiple={false}
                    onDone={handleFileUpload}
                  />
                  {errors.image && (
                    <div className='text-danger'>
                      {errors.image}
                    </div>
                  )}
                </div>

                <Button
                  type='submit'
                  className='btn btn-success mt-4'
                >
                  Update Record
                </Button>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant='secondary'
                onClick={handleUpdateClose}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Library
