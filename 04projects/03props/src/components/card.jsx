import React from 'react';

function Card({card_profile_Name, card_work_type}){
    return( 
        <div className='p-5'>
            <a href="#" className="group relative block bg-black">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">{card_work_type}</p>
                    <p className="text-xl font-bold text-white sm:text-2xl">{card_profile_Name}</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm text-white">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                perferendis hic asperiores quibusdam quidem voluptates doloremque
                                reiciendis nostrum harum. Repudiandae?
                            </p>
                            <button className='bg-amber-500 rounded-2xl'>More</button>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Card;