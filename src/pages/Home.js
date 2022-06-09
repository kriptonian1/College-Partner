import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavigBar from '../components/NavigBar'
import { boyImg } from "../resources"


const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <NavigBar />
            <div className='justify-between pb-[4rem]  font-nunito xl:pt-[9vw]  font-black text-[3vw] text-[#5C7AFF] text-center'>
                Find and organize your notes in more efficient way
            </div>

            <div className='justify-between pb-[4rem]  font-nunito   font-black text-[2vh] text-[#5B5B5B] text-center'>
                <div>
                    Best way to find class notes
                </div>
                <div>
                    to help you in studies & scoring better marks.
                </div>

            </div>

            <div>
                <img className='float-right pr-20 w-[23vw] h-auto' src={boyImg} alt="boy" />
            </div>

            <div className='px-[30vw]'>
                <div className='border-[2px] border-[#5C7AFF] border-solid'></div>
            </div>

            <div>
                <div className='flex-col justify-between pb-[4rem] pt-[4rem] mx-[35vw] font-nunito text-[2vh] text-[#5B5B5B] text-center'>
                    <div>
                        Let’s get started in your journey of an awesome score in
                    </div>
                    <div>
                        each semester with notes in your fingerprintso that you can
                    </div>
                    <div>
                        study anytime and anywhere you want ;)
                    </div>

                </div>
            </div>


            <div className='mx-[45vw]'>
                <button onClick={() => navigate("/resources")} className='py-[0.5rem] px-[5.5rem] border-2 hover:border-white hover:bg-[#5C7AFF] transition-all hover:text-white border-[#5C7AFF] rounded-[10px]'>
                    View Resources
                </button>
            </div>


        </div>
    )
}

export default Home