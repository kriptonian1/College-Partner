import React from 'react'
import FilterSection from './FilterSection'

const Filter = () => {

  const courses = [
    'All','Web Development','Mobile Development','UI/UX Design','Data Science','Business','Other'
  ];

  return (
    <div className='border-r-black border-r-2 pl-24 pr-10'>
      <div>
        Filters
      </div>

      <FilterSection selected={"Course"} options={courses}/>
      <FilterSection selected={"Stream"}/>
      <FilterSection selected={"Subject"}/>
      <FilterSection selected={"Year"}/>
      <FilterSection selected={"Semester"}/>

    </div>
  )
}

export default Filter