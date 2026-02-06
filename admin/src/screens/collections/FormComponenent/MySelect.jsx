/* eslint-disable react/prop-types */

import { useField } from 'formik'
import { useState } from 'react'

const MySelect = ({ label, ...props }) => {
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
      <select
        onMouseEnter={() => setIsFieldHovered(true)}
        onMouseLeave={() => setIsFieldHovered(false)}
        {...field}
        {...props}
        style={{ backgroundColor: 'var(--thead-bg-color)' , borderColor : borderClr() , color : 'var( --base-text-color)', }}
        className={`w-full rounded-md   border-[3px] py-3 px-6 text-base font-bold outline-none `}
      />
      {meta.touched && meta.error && (
        <p className='text-[#fc8181] ml-2 lowercase text-sm mt-1'>
          {meta.error}
        </p>
      )}
    </div>
  )
}

export default MySelect
