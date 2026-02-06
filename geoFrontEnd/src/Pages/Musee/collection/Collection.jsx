import { useState, useEffect } from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import {
  useGetAllCollections,
  useGetFilteredCollections,
} from '../../../api/collections/collectionQuery'
import CollectionOverlay from './CollectionOverlay' // Adjust the path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ITEMS_PER_PAGE = 6

const Collection = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageInput, setPageInput] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedType, setSelectedType] = useState('')
  const [selectedSubType, setSelectedSubType] = useState('')
  const [selectedCategory, setSelectedCategory] =
    useState('')
  const [isFiltered, setIsFiltered] = useState(false)
  const [filterParams, setFilterParams] = useState(null)
  const [selectedCollection, setSelectedCollection] =
    useState(null)

  const {
    data: allCollections,
    isLoading: isLoadingAll,
    isError: isErrorAll,
  } = useGetAllCollections()
  const {
    data: filteredCollections,
    isLoading: isLoadingFiltered,
    isError: isErrorFiltered,
  } = useGetFilteredCollections(filterParams)

  const data = isFiltered
    ? filteredCollections
    : allCollections

  const totalPages = data
    ? Math.ceil(data.length / ITEMS_PER_PAGE)
    : 1

  if (isLoadingAll || isLoadingFiltered) {
    return <span>... is pending</span>
  }

  if (isErrorAll || isErrorFiltered) {
    return <span> there is an error </span>
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      setPageInput('')
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      setPageInput('')
    }
  }

  const handlePageInputChange = (event) => {
    const value = event.target.value
    if (
      value === '' ||
      (/^\d+$/.test(value) &&
        value >= 1 &&
        value <= totalPages)
    ) {
      setPageInput(value)
    }
  }

  const handlePageInputKeyDown = (event) => {
    if (event.key === 'Enter' && pageInput !== '') {
      const newPage = Number(pageInput)
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage)
      }
      setPageInput('')
    }
  }

  const handlePageInputBlur = () => {
    if (pageInput !== '') {
      const newPage = Number(pageInput)
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage)
      }
      setPageInput('')
    }
  }

  const getCurrentPageVideos = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return data.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE,
    )
  }

  const handleFilterButtonClick = (type) => {
    setSelectedType(type)
    setSelectedSubType('')
    setSelectedCategory('')
  }

  const handleSubTypeButtonClick = (subType) => {
    setSelectedSubType(subType)
    setSelectedCategory('')
  }

  const handleCategoryButtonClick = (category) => {
    setSelectedCategory(category)
  }

  const handleConfirmFilter = () => {
    setIsFilterOpen(false)
    setIsFiltered(true)
    const params = {
      selectedType: selectedType.toLowerCase(),
      selectedSubType: selectedSubType.toLowerCase(),
      selectedCategory: selectedCategory.toLowerCase(),
    }

    setFilterParams(params)
  }

  const getSubTypes = (type) => {
    switch (type) {
      case 'Minerals':
        return ['Non-silicates', 'Silicates']
      case 'Rocks':
        return ['Sedimentary', 'Magmatic', 'Metamorphic']
      case 'Paleontology':
        return ['Paleozoic', 'Mesozoic', 'Cenozoic']
      default:
        return []
    }
  }

  const getCategories = (type, subType) => {
    if (
      type === 'Minerals' &&
      subType === 'Non-silicates'
    ) {
      return [
        'Elements natifs',
        'Sulfides and sulfosalts',
        'Halogenides',
        'Oxides and hydroxides',
        'Carbonates',
        'Sulfates',
        'Phosphates',
      ]
    }
    if (type === 'Rocks' && subType === 'Sedimentary') {
      return ['Detrital', 'Chemical', 'Biochemical']
    }
    if (type === 'Rocks' && subType === 'Magmatic') {
      return ['Plutonic', 'Volcanic']
    }
    return []
  }

  const handleCollectionClick = (collection) => {
    setSelectedCollection(collection)
  }

  const handleOverlayClose = () => {
    setSelectedCollection(null)
  }

  return (
    <div >
      <Navbar />

      <div className='flex items-center justify-center flex-wrap pt-6 mt-16 '>
        <button
          className='text-blue-700 fw-bold  border-2 border-blue-500 hover:text-white hover:bg-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'
          onClick={() => setIsFilterOpen(true)}
        >
          Filter
        </button>

        <button
          className='text-blue-700 fw-bold border-2 border-blue-500 hover:text-white hover:bg-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'
          onClick={() => {
            setSelectedType('')
            setSelectedSubType('')
            setSelectedCategory('')
            setIsFiltered(false)
            setFilterParams(null)
          }}
        >
          All Types
        </button>
      </div>

      {isFilterOpen && (
        <div className='fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white rounded-lg p-8 max-w-2xl w-full space-y-6 relative'>
            <div className='flex justify-between items-center'>
              <h2 className='text-xl font-semibold text-center'>
                Filter
              </h2>
              <button
                className='text-gray-600 hover:text-gray-800'
                onClick={() => setIsFilterOpen(false)}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{ color: 'red', fontSize: '32px' }}
                />
              </button>
            </div>

            <div>
              <h3 className='font-medium mb-2'>Type</h3>
              <div className='space-x-2 flex flex-wrap justify-center'>
                {['Minerals', 'Rocks', 'Paleontology'].map(
                  (type) => (
                    <button
                      key={type}
                      className={`px-4 py-2 rounded-lg ${selectedType === type ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                      onClick={() =>
                        handleFilterButtonClick(type)
                      }
                    >
                      {type}
                    </button>
                  ),
                )}
              </div>
            </div>

            {selectedType && (
              <div>
                <h3 className='font-medium mb-2'>
                  Subtype
                </h3>
                <div className='space-x-2 flex flex-wrap justify-center'>
                  {getSubTypes(selectedType).map(
                    (subType) => (
                      <button
                        key={subType}
                        className={`px-4 py-2 rounded-lg ${selectedSubType === subType ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() =>
                          handleSubTypeButtonClick(subType)
                        }
                      >
                        {subType}
                      </button>
                    ),
                  )}
                </div>
              </div>
            )}

            {selectedSubType && (
              <div>
                <h3 className='font-medium mb-2'>
                  Category
                </h3>
                <div className='space-x-2 flex flex-wrap justify-center'>
                  {getCategories(
                    selectedType,
                    selectedSubType,
                  ).map((category) => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-lg mb-2 ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                      onClick={() =>
                        handleCategoryButtonClick(category)
                      }
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className='flex justify-center'>
              <button
                className='bg-red-500 text-white rounded-lg py-2 px-4 mr-2'
                onClick={() => {
                  setSelectedType('')
                  setSelectedSubType('')
                  setSelectedCategory('')
                }}
              >
                Clear All
              </button>
              <button
                className='bg-blue-500 text-white rounded-lg py-2 px-4'
                onClick={handleConfirmFilter}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10'>
        {getCurrentPageVideos().map((collection, index) => (
          <div key={index} className='relative'>
            <video
              className='h-auto max-w-full rounded-lg'
              src={collection.video_url}
              muted
              loop
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
              onClick={() =>
                handleCollectionClick(collection)
              } // Add click handler
            />
          </div>
        ))}
      </div>

      <div className='flex justify-around items-center mb-10 px-10 mt-10'>
        <div className='flex items-center'>
          {currentPage > 1 && (
            <button
              onClick={handlePrevPage}
              className='text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-3 py-2.5 mx-2'
            >
              &larr;
            </button>
          )}
          {currentPage < totalPages && (
            <button
              onClick={handleNextPage}
              className='text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 mx-2 md:px-3'
            >
              <span className='hidden md:inline'>
                Next page &rarr;
              </span>
              <span className='inline md:hidden'>
                &rarr;
              </span>
            </button>
          )}
        </div>
        <div className='text-gray-700 dark:text-gray-700 flex items-center'>
          Page {currentPage}
          <input
            type='text'
            value={pageInput}
            onChange={handlePageInputChange}
            onKeyDown={handlePageInputKeyDown}
            onBlur={handlePageInputBlur}
            className='w-12 mx-2 text-center border border-gray-300 rounded-md'
          />
          of {totalPages}
        </div>
      </div>

      {selectedCollection && (
        <CollectionOverlay
          modelURL={selectedCollection.glb_url}
          description={selectedCollection}
          onClose={handleOverlayClose}
        />
      )}
    </div>
  )
}

export default Collection
