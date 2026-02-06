import { useState } from 'react'
import AreaTableAction from './AreaTableAction'
import './AreaTable.scss'
import { useGetAllCollections } from '../../api/collections/collectionQuery'
import { Link, useLocation } from 'react-router-dom'
import ShowAllert from './ShowAllert'

const TABLE_HEADS = [
  'Preview',
  'Name',
  'Type',
  'Subtype',
  'Category',
  'Chemical Formula',
  'Geologic Origin',
  'Action',
]

const ITEMS_PER_PAGE = 6 // Number of items to display per page

const Collections = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const collectionQuery = useGetAllCollections()
  const [showAlert, setShowAlert] = useState(false)
  // display seccuss update message :
  const location = useLocation()
  const [message, setMessage] = useState(
    location.state?.message,
  )

  const handelDeleteSuccess = () => {
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  if (collectionQuery.isLoading) {
    return <span>is pending ...</span>
  }
  if (collectionQuery.isError) {
    return <span>there is an error</span>
  }

  const API_DATA = collectionQuery.data
  const totalPages = Math.ceil(
    API_DATA.length / ITEMS_PER_PAGE,
  )

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentData = API_DATA.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  )

  return (
    <section className='content-area-table'>
      <div className='data-table-info flex justify-between mb-2 items-center'>
        <h4
          className='data-table-title  '
          style={{ marginBottom: 0 }}
        >
          Collections
        </h4>
        <Link
          to={'/collections/create'}
          className='inline-block  rounded-lg bg-[var(--primary-color)] text-[var(--light-color)] shadow-[0px_0px_4px_rgba(71,91,232,0.04)]  transition-[var(--default-transition)] px-6 pb-2 pt-2.5  font-medium  leading-normal text-white shadow-primary-3 hover:bg-[var(--side-link-hover-color)] hover:shadow-primary-2 focus:bg-[var(--side-link-hover-color)] focus:shadow-primary-2 focus:outline-none focus:ring-0  motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong '
        >
          New Collection
        </Link>
      </div>
      <div className='data-table-diagram'>
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData?.map((dataItem) => (
              <tr key={dataItem._id}>
                <td className='dt-cell-preview'>
                  <video
                    className='h-auto max-w-full rounded-circle'
                    src={dataItem.video_url}
                    muted
                    loop
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => e.target.pause()}
                  />
                </td>
                <td>{dataItem.name}</td>
                <td>{dataItem.type}</td>
                <td>{dataItem.subtype}</td>
                <td>{dataItem.category}</td>
                <td>{dataItem.formule_chimique}</td>
                <td>{dataItem.origine_geologique}</td>
                <td className='dt-cell-action'>
                  <AreaTableAction
                    id={dataItem._id}
                    onDeleteSuccess={handelDeleteSuccess}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showAlert && (
          <ShowAllert
            status='sec'
            duration={3}
            message='Collection has been deleted'
          />
        )}
        {message && (
            <ShowAllert
              status='sec'
              duration={3}
              message={message}
            />
          ) }
      </div>
      <div className='pagination-controls'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  )
}

export default Collections
