import React from 'react'
import Filter from '../components/Filter'
import List from '../components/List'
import NavigBar from '../components/NavigBar'
import SearchBar from '../components/SearchBar'
import SortBy from '../components/SortBy'
import SortOrder from '../components/SortOrder'

const Resources = () => {
    return (
        <div className='mb-20'>
            <NavigBar />
            <div className='justify-between pb-[4vh] font-nunito pt-[4vh] xl:pt-[4vh] text-xl md:text-3xl text-[#4A8FE7] text-center'>
                Search from thousands of resources
            </div>
            <div className='flex flex-col md:flex-row gap-10 mx-10 md:mx-[10vw] '>
                <div className='border-0 md:border-r-2 pr-10 flex flex-col gap-10 overflow-y-scroll overflow-x-hidden md:h-[70vh]'>
                    <Filter className=''/>
                    <SortBy className=''/>
                    <SortOrder className=''/>
                </div>
                <div className='flex flex-col grow order-first md:order-last gap-10'>
                    <SearchBar />
                    <List className/>
                </div>
            </div>
        </div>
    )
}

export default Resources;