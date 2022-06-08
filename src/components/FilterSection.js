import React from 'react'

const FilterSection = ({selected, options}) => {
    // options.map(option => console.log(option));
  return (
    <div>
        <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <select className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-[#F9F9F9] bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-[white] focus:border-[#4A8FE7] focus:outline-none" aria-label="Default select example">
            <option defaultValue>{selected}</option>
            {/* {options.map((option,index) => {return(<option key={index}>{option.name}</option>)})} */}
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default FilterSection