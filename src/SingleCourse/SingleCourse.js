import React, { useState } from 'react';

import './SingleCourse.css'

const SingleCourse = (props) => {

  const [show, setShow] = useState(false)

  const { id, tutor, title, img, img2, guided, description, duration, lectures, topic } = props.course





  return (
    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} >


      <div className=' hidden md:block'>
        {
          show ?


          <div class="hover w-[95%]  md:w-96 bg-[white] border border-[brown] drop-shadow-2xl  md:h-[400px]">
              <figure class=" rounded-xl p-8 dark:bg-slate-800 ">

                <div className=''>
                <a href="/about"><img class="w-24 border-2 border-[brown] rounded-full mx-auto h-24 "
                    src={img2}
                    alt="" width="384" height="512" /></a>
                  <figcaption class=" text-center font-medium">
                    <div class="text-[brown]">
                      <a href="/about">{guided}</a>
                    </div>
                    <div>
                      Scholar of Hadith & Fiqh
                    </div>
                  </figcaption>
                </div>
                <div class="pt-6 space-y-4">
                  <blockquote>
                    <p  class="text-lg font-medium hover:text-[brown]">
                    <a href={`/${id}`}>{title}</a>
                    </p>
                    <p title={description} className='text-xs color-[grey]'>{description.slice(0, 80)}...</p>
                  </blockquote>

                </div>
                <a href={`/${id}`}> <button className='btn bg-[brown] border-none rounded-none btn-sm w-[100%] my-3'>detail</button>
                </a>
              </figure>

            </div>


            :
            <div class=" before inline-block  card-compact md:w-96 w-[98%]  bg-base-100 shadow-xl md:h-[400px]">
              <figure><img src={img} alt="course" /></figure>
              <div class="card-body">
                <h2 class="card-title text-[black]">{title}</h2>
                <p className='text-[black]'>Instructor : {tutor}</p>
                {/* <p>{description}</p> */}
                <p className='text-[black]'>Duration : {duration} hrs</p>
                <p className='text-[black]'>Lectures : {lectures}</p>
                <div class="card-actions justify-end">
                  {/* <button class="btn btn-primary">Buy Now</button> */}
                </div>
                <div className="flex w-full text-[black] font-normal">
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                        </div>
              </div>
            </div>

        }

      </div>

      <div className='md:hidden'>
        <div class=" before inline-block  card-compact md:w-96 w-[100%]  bg-base-100 shadow-xl md:h-[350px]">
          <figure><img src={img} alt="course" /></figure>




          <div class="card-body">
            <h2 class="card-title text-base text-[black]">{title}</h2>
            <div className='flex flex-col items-center text-center '>
              <img className='w-20 h-20 border border-[brown] p-1 mt-1 rounded-full'
                src={img2}
                alt="" />
              <p className='mb-1 '>
                <p className='text-[gray]'>Guided by </p>

                <p className='text-[brown]'>{guided}</p>
                {/* <p className='text-[black]'> Scholar of Hadith & Fiqh</p> */}

              </p>


            </div>

            <p className='text-[black]'> Instructor : {tutor}</p>
            {/* <p>{description}</p> */}
            <p className='text-[black]'>Duration : {duration} hrs</p>
            <p className='text-[black]'>Lectures : {lectures} </p>
            

            <div className="flex w-full text-[black] font-normal">
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                            <svg width="16" height="20" fill="currentColor">
                                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                        </div>
                        <div class="card-actions justify-end">
            <a href={`/${id}`}> <button className='btn bg-[brown] border-none rounded-none btn-sm w-[100%] '>detail</button></a>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SingleCourse;