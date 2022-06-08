import React from 'react'
import Filter from '../components/Filter'
import List from '../components/List'
import NavigBar from '../components/NavigBar'
import SearchBar from '../components/SearchBar'

const Landing = () => {
    return (
        <div className=''>
            <NavigBar />
            <div className='justify-between pb-[4vh]  font-nunito pt-[4vh] xl:pt-[4vh] text-[3vw] text-[#4A8FE7] text-center'>
                Search from thousands of resources
            </div>
            <div>
                <div className=' flex  justify-center'>
                    {/* Search bar */}
                    <SearchBar />
                </div>


                <div className="flex flex-row space-x-3">
                    <div>
                        {/* Filter Pannel  */}
                        <Filter />
                    </div>

                    {/* List of resources */}
                    <List />
                </div>

            </div>
        </div>
    )
}

export default Landing