import React from 'react'
import FilterSection from './FilterSection'

const Filter = (props) => {

  const classes = props.className+' ';

  const courses = [
    'All','Web Development','Mobile Development','UI/UX Design','Data Science','Business','Other'
  ];

  return (
    <div className={classes + 'flex flex-col w-100 min-w-fit max-w-fit gap-3 pr-10'}>
      <span className='text-gray-700 text-xl'>Filters</span>
      <FilterSection selected={"Course"} options={courses}/>
      <FilterSection selected={"Stream"}/>
      <FilterSection selected={"Subject"}/>
      <FilterSection selected={"Year"}/>
      <FilterSection selected={"Semester"}/>

    </div>
  )
}

export default Filter