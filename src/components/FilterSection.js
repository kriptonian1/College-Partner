import React from 'react'

const FilterSection = ({selected, options}) => {
    // options.map(option => console.log(option));
  return (
    <div>
      <select name="cars" className='
        w-[87vw]
        md:w-[10vw] 
        min-w-fit
        form-select appearance-none
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-600
        bg-[#F9F9F9] bg-clip-padding bg-no-repeat
        border border-solid border-gray-300 
        rounded
        transition
        ease-in-out
        m-0'>
        <option value="one">{selected}</option>
        <option value="one">Two</option>
        <option value="one">Three</option>
      </select>
    </div>
  )
}

export default FilterSection