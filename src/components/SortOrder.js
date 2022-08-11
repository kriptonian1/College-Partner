import React from "react";
import SortOrderOption from "./SortOrderOption";

const SortOrder = (props) => {
    return (
        <div className="flex flex-col gap-3">
            <span className='text-gray-700 text-xl'>Sort by</span>
            <SortOrderOption name='Ascending' value='1'/>
            <SortOrderOption name='Descending' value='2'/>
        </div>
    );
}

export default SortOrder;