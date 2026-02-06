/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useField } from 'formik'

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const [isFieldHovered, setIsFieldHovered] =
    useState(false)

  const borderClr = () => {
    if (isFieldHovered) return '#6A64F1'

    if (meta.error && meta.touched ) return '#fc8181'
    
    return  'var(--thead-bg-color)'
  }

  return (
    <div className=' lg:mb-0'>
      <label
        htmlFor={props.name}
        style={{color : 'var(--base-text-color)'}}
        className='mb-2 mt-4 block text-base font-bold '
        
      >
        {label}
      </label>
      <input
        onMouseEnter={() => setIsFieldHovered(true)}
        onMouseLeave={() => setIsFieldHovered(false)}
        style={{
          backgroundColor: 'var(--thead-bg-color)',
          color : 'var( --base-text-color)',
          borderColor: borderClr(),
        }}
        className={`w-full  rounded-md border-[3px]   py-3 
        px-6 text-base font-bold  outline-none `}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <p className='text-[#fc8181] ml-2 lowercase text-sm mt-1'>
          {meta.error}
        </p>
      )}
    </div>
  )
}

export default MyInput
