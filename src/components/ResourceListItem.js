import stars from '../resources/stars.png'
import author from '../resources/author.png'
import course from '../resources/course.png'
import date from '../resources/date.png'
import stream from '../resources/stream.png'
import subject from '../resources/subject.png'
import views from '../resources/views.png'

const ResourceListItem = (props) => {
    return (
        <div className='group z-10 hover:z-20 w-screen min-w-max md:w-fit border-2 h-40 hover:h-fit hover:border-blue-500 transition ease-in-out hover:transition-all hover:ease-in-out hover:duration-150 duration-150 rounded-xl border-gray-400 overflow-hidden'>
            <div className='p-7'>
                <h2 className='w-60 h-9 overflow-y-hidden overflow-x-hidden text-lg text-gray-700'>Basics of Java</h2>
                <div className='grid grid-cols-2 grid-rows-2 mt-5 gap-2 text-gray-500'>
                    <div className='flex flex-row gap-3'>
                        <img src={views} width={25} className='flex-none h-fit'/>
                        <span>41267</span>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <img src={stars} width={25} className='flex-none h-fit'/>
                        <span>650</span>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <img src={author} width={25} className='flex-none h-fit'/>
                        <span>Author A</span>
                    </div>
                    <div>
                        <span>March 16, 2022</span>
                    </div>
                </div>
            </div>
            <div className='bg-blue-500 text-white p-7 flex flex-col gap-3'>
                <div className='flex flex-row gap-3'>
                    <img src={course} width={20} className='flex-none h-fit'/>
                    <span>Bachelors of Technology</span>
                </div>
                <div className='flex flex-row gap-3'>
                    <img src={stream} width={25} className='flex-none h-fit'/>
                    <span>Cumputer Science and Engineering</span>
                </div>
                <div className='flex flex-row gap-3'>
                    <img src={subject} width={25} className='flex-none h-fit'/>
                    <span>Digital electronics</span>
                </div>
                <div className='flex flex-row gap-3'>
                    <img src={date} width={25} className='flex-none h-fit'/>
                    <span>2nd year, 3rd semester</span>
                </div>
            </div>
        </div>
    )
}

export default ResourceListItem;