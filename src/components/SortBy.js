import React from "react";
import SortByOption from "./SortByOption";

const SortBy = (props) => {
    return (
        <div className="flex flex-col gap-3">
            <span className='text-gray-700 text-xl'>Sort by</span>
            <SortByOption name='Date uploaded' value='1'/>
            <SortByOption name='Stars' value='2'/>
            <SortByOption name='Views' value='3'/>
            <SortByOption name='Files' value='4'/>
            <SortByOption name='Name' value='5'/>
        </div>
    );
}

export default SortBy;