import { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import { validationUpdateSchema } from './FormComponenent/validationSchema'
import MyInput from './FormComponenent/MyInput'
import MySelect from './FormComponenent/MySelect'
import { updateCollection } from '../../api/collections/collectionReq'
import { useGetCollection } from '../../api/collections/collectionQuery'
import { useParams, useNavigate } from 'react-router-dom'

const CollectionForm = () => {
  const [type, setType] = useState('')
  const [subtype, setSubtype] = useState('')
  const [category, setCategory] = useState('')
  const [IsSubmitting, setIsSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState('')

  const { id } = useParams()
  const navigate = useNavigate()

  const { isPending, isError, data } = useGetCollection(id)

  useEffect(() => {
    if (data) {
      setType(data.type)
      setSubtype(data.subtype)
      if (data.category) {
        setCategory(data.category)
      }
    }
  }, [data]) // Adding data as a dependency to ensure the effect runs when data changes

  if (isPending) return <span>is pending ...</span>
  if (isError) return <span>there is an error</span>

  const subtypes = {
    minerals: ['Non-silicates', 'Silicates'],
    rocks: ['Sedimentary', 'Magmatic', 'Metamorphic'],
    paleontology: ['Paleozoic', 'Mesozoic', 'Cenozoic'],
  }

  const categories = {
    'Non-silicates': [
      'Elements natifs',
      'Sulfides and sulfosalts',
      'Halogenides',
      'Oxides and hydroxides',
      'Carbonates',
      'Sulfates',
      'Phosphates',
    ],
    Sedimentary: ['Detrital', 'Chemical', 'Biochemical'],
    Magmatic: ['Plutonic', 'Volcanic'],
  }

  const handleTypeChange = (e) => {
    setType(e.target.value)
    setSubtype('')
    setCategory('')
  }

  const handleSubtypeChange = (e) => {
    setSubtype(e.target.value)
    setCategory('')
  }

  const initialValues = {
    type: data.type,
    subtype: data.subtype,
    name: data.name,
    description: data.description,
    formule_chimique: data.formule_chimique,
    composition_chimique: data.composition_chimique,
    origine_geologique: data.origine_geologique,
    category: data.category,
  }

  const onSubmit = async (values) => {
    setIsSubmitting(true)
    try {
      await updateCollection(id, values)
      setIsSubmitting(false)
      navigate('/collections', {state : {message : 'Collection has been updated'}})
    } catch (error) {
      setIsSubmitting(false)
      setSubmissionError(error.message)
      setTimeout(() => setSubmissionError(''), 3000)
    }
  }

  return (
    <div className='flex justify-center relative'>
      {IsSubmitting && (
        <div className='absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible'>
            <svg
              className='w-16 h-16 animate-spin text-[#475be8]'
              viewBox='0 0 64 64'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
            >
              <path
                d='M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z'
                stroke='currentColor'
                strokeWidth='5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <path
                d='M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762'
                stroke='currentColor'
                strokeWidth='5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-white'
              ></path>
            </svg>
          </div>
        </div>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationUpdateSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Form
            className='content-area-table w-full max-w-5xl rounded-lg shadow-lg'
            style={{ padding: 48 }}
          >
            <h4
              className='data-table-title  '
              style={{ marginBottom: 0 }}
            >
              Update Collection
            </h4>
            <div className='grid gap-5 lg:grid-cols-2'>
              <MyInput
                label='Name'
                name='name'
                type='text'
                placeholder='Name'
              />

              <MySelect
                label='Type'
                name='type'
                onChange={(e) => {
                  handleTypeChange(e)
                  setFieldValue('type', e.target.value)
                }}
              >
                <option value='' disabled>
                  Select type
                </option>
                <option value='minerals'>Minerals</option>
                <option value='rocks'>Rocks</option>
                <option value='paleontology'>
                  Paleontology
                </option>
              </MySelect>
            </div>

            <div className='grid gap-5 lg:grid-cols-2'>
              {
                <MySelect
                  label='Subtype'
                  name='subtype'
                  onChange={(e) => {
                    handleSubtypeChange(e)
                    setFieldValue('subtype', e.target.value)
                  }}
                >
                  <option value='' disabled>
                    Select subtype
                  </option>
                  {subtypes[type]?.map((subtypeOption) => (
                    <option
                      key={subtypeOption}
                      value={subtypeOption}
                    >
                      {subtypeOption}
                    </option>
                  ))}
                </MySelect>
              }

              {subtype && categories[subtype] && (
                <MySelect
                  label='Category'
                  name='category'
                  value={category}
                  required
                  onChange={(e) => {
                    setCategory(e.target.value)
                    setFieldValue(
                      'category',
                      e.target.value,
                    )
                  }}
                >
                  <option value='' disabled>
                    Select category
                  </option>
                  {categories[subtype].map(
                    (categoryOption) => (
                      <option
                        key={categoryOption}
                        value={categoryOption}
                      >
                        {categoryOption}
                      </option>
                    ),
                  )}
                </MySelect>
              )}
            </div>

            <div className='grid gap-5 lg:grid-cols-2'>
              <MyInput
                label='Chemical Formula'
                name='formule_chimique'
                placeholder='Chemical Formula'
                type='text'
              />

              <MyInput
                type='text'
                label='Chemical Composition'
                name='composition_chimique'
                placeholder='Chemical Composition'
              />
            </div>

            <div >
              <MyInput
                label='Geological Origin'
                type='text'
                placeholder='Geological Origin'
                name='origine_geologique'
              />
            </div>
            <div className='mb-5'>
              <MyInput
                label='Description'
                as='textarea'
                name='description'
                id='description'
                placeholder='Description'
                // style={{height : '200px'}}
              />
            </div>

            <div>
              <button
                type='submit'
                className='hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none'
              >
                {IsSubmitting
                  ? 'being updated ...'
                  : 'Update Collection'}
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {submissionError && (
        <div className='fixed top-6 right-12 z-50'>
          <div className='bg-[#fc8181] text-white p-4 rounded-lg shadow-md opacity-50'>
            <p className='text-lg font-semibold'>Error</p>
            <p>{submissionError}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CollectionForm
