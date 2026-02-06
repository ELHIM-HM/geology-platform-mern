/* eslint-disable react/prop-types */

import { useState, useEffect, useRef } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useDeleteCollection } from '../../api/collections/collectionQuery'

const AreaTableAction = ({ id, onDeleteSuccess }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [deletionError, setDeletionError] = useState(null)

  const handleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const dropdownRef = useRef(null)

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setShowDropdown(false)
    }
  }

  useEffect(() => {
    document.addEventListener(
      'mousedown',
      handleClickOutside,
    )
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside,
      )
    }
  }, [])

  const deleteCollectionMutation = useDeleteCollection()

  const handleDelete = async (id) => {
    setIsDeleting(true)
    setDeletionError(null)

    try {
      await deleteCollectionMutation.mutateAsync(id)
      onDeleteSuccess()
    } catch (error) {
      console.error('Error deleting collection:', error)
      setDeletionError(
        'An error occurred while deleting the collection.',
      )
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <>
      <button
        type='button'
        className='action-dropdown-btn'
        onClick={handleDropdown}
        disabled={isDeleting}
      >
        {isDeleting ? (
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>
              deleting...
            </span>
          </div>
        ) : (
          <HiDotsHorizontal size={18} />
        )}
        {showDropdown && (
          <div
            className='action-dropdown-menu'
            ref={dropdownRef}
          >
            <ul
              className='dropdown-menu-list'
              style={{ margin: 0, padding: '6px 12px' }}
            >
              <li className='dropdown-menu-item'>
                <Link
                  to={`/collections/update/${id}`}
                  className='dropdown-menu-link'
                >
                  Edit
                </Link>
              </li>
              <li className='dropdown-menu-item'>
                <span
                  className='dropdown-menu-link'
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </span>
              </li>
            </ul>
          </div>
        )}
      </button>
      {deletionError && (
        <span className='text-danger ms-2'>
          {deletionError}
        </span>
      )}
    </>
  )
}

export default AreaTableAction
