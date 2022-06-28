import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import MobileProfileSide from '../MobileProfileSide';
import useCourses from '../Shared/useCourses';

const Profile = () => {

    const [user] = useAuthState(auth);

    const [courses] = useCourses()

    const [more, setMore] = useState(false)
    const [more2, setMore2] = useState(false)
    const [less, setLess] = useState(true)
    const [less2, setLess2] = useState(true)

    const seeMore = () => {
        setMore(true)

    }
    const seeMore2 = () => {
        setMore2(true)

    }

    const seeLess = () => {
        setMore(false)


    }
    const seeLess2 = () => {
        setMore2(false)


    }




    return (
        <div className=' bg-slate-100 pt-20 '>
            <div className='md:grid md:grid-cols-12   md:w-[80%] md:mx-auto md:gap-6'>
                <div className='col-span-9'>
                    <div style={{ zIndex: '0', backgroundColor: 'black', backgroundRepeat: 'no-repeat', backgroundAttachment: "", backgroundImage: "url('https://img.freepik.com/free-photo/pot-candle-near-opened-book_23-2147868944.jpg?w=1060&t=st=1656146380~exp=1656146980~hmac=af7cc09e02975d9bee831c7c01782a640e959c0d8d6a98cc1f0766dd8a5565b5')" }}
                        class=" bg-cover md:w-[100%] md:mx-auto relative shadow overflow-hidden sm:rounded-t-lg ">
                        <div class="px-4 py-5 sm:px-6 h-[250px] md:h-[300px]" >

                            <p className='absolute top-[2%] right-[1%] md:right-[1%] btn btn-xs my-3 border-[white]'>Change Cover</p>

                        </div>
                    </div>


                    <div style={{ zIndex: '20' }} className='relative bg-[white] pt-20  mx-auto '>

                        <img class="md:w-36 w-32 border border-[white] border-4 absolute bottom-[95%] right-[61%]  md:bottom-[92%] md:right-[81%]  rounded-full  "
                            src="https://i.stack.imgur.com/frlIf.png" alt='' />

                        <a href="/edit-profile"><button className='absolute bottom-[94.5%] right-[2%]  md:bottom-[92%] md:right-[1%] btn btn-xs my-3 border-[white]'>Edit profile</button></a>


                        <p class=" absolute bottom-[91.5%] right-[34%]  md:bottom-[85%] md:right-[64.5%] md:text-2xl text-[black] text-lg leading-6 font-medium  rounded ">{user?.email}</p>

                        <div class="shadow overflow-hidden sm:rounded-b-lg ">

                            <div class=" border-gray-200">
                                <dl className='pt-4 md:pt-10'>

                                    <div class=" bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">

                                        <dt class="text-sm font-medium text-gray-500">Full name</dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">User Name</dd>
                                    </div>
                                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">Profile status</dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Instructor / Student / Admin</dd>
                                    </div>
                                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">Email address</dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user?.email}</dd>
                                    </div>
                                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">Enrolled Course</dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><a href="/courses"><button className='btn btn-xs'>My Courses</button></a></dd>
                                    </div>
                                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">About</dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
                                    </div>
                                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">Attachments</dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            <ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
                                                <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                    <div class="w-0 flex-1 flex items-center">
                                                        <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                                                        </svg>
                                                        <span class="ml-2 flex-1 w-0 truncate"> resume_back_end_developer.pdf </span>
                                                    </div>
                                                    <div class="ml-4 flex-shrink-0">
                                                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
                                                    </div>
                                                </li>
                                                <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                    <div class="w-0 flex-1 flex items-center">
                                                        <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                                                        </svg>
                                                        <span class="ml-2 flex-1 w-0 truncate"> coverletter_back_end_developer.pdf </span>
                                                    </div>
                                                    <div class="ml-4 flex-shrink-0">
                                                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                    </div>


                </div>

                <div className='col-span-3  '>

                    <div className='card bg-[white] p-4 divide divide-y md:mt-0 mt-4 space-y-4'>
                        <p className='text-[gray] font-semibold'>Today's Ayah For You </p>

                        <div className="collapse collapse-arrow border-b-2">
                            <input type="checkbox" />
                            <div className="collapse-title text-normal font-semibold  ">
                                إِقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
                            </div>
                            <div className="collapse-content">
                                <p>
                                    "Read with the Name of your Rabb (with the knowledge that comprises your being), who created." <br /> || Alaq(95)-1

                                </p>
                            </div>
                        </div>


                    </div>
                    <div className='card bg-[white] p-4 divide divide-y my-4 space-y-4'>
                        <p className='text-[gray] font-semibold'>Today's Hadith For You </p>

                        <div className="collapse collapse-arrow border-b-2">
                            <input type="checkbox" />
                            <div className="collapse-title font-semibold  ">
                                وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ وَمَا اجْتَمَعَ قَوْمٌ فِي بَيْتٍ مِنْ بُيُوتِ اللَّهِ يَتْلُونَ كِتَابَ اللَّهِ وَيَتَدَارَسُونَهُ بَيْنَهُمْ إِلاَّ نَزَلَتْ عَلَيْهِمُ السَّكِينَةُ وَغَشِيَتْهُمُ الرَّحْمَةُ وَحَفَّتْهُمُ الْمَلاَئِكَةُ وَذَكَرَهُمُ اللَّهُ فِيمَنْ عِنْدَهُ
                            </div>
                            <div className="collapse-content">
                                <p>
                                    "Whoever travels a path in search of knowledge, Allah will make easy for him a path to Paradise. People do not gather in the houses of Allah, reciting the book of Allah and studying it together, but that tranquility will descend upon them, mercy will cover them, angels will surround them, and Allah will mention them to those near him."

                                    <br /> ||  Sahih Muslim 2699
                                </p>
                            </div>
                        </div>

                    </div>


                    <div className='card bg-[white] p-4'>
                        <h1 className='mb-3 font-bold'>Sharpen Your Knowledge</h1>
                        <div className='divide divide-y'>
                            {
                                more ? courses.map(course => <div className='flex py-3'>
                                    <img className='w-24 h-16 mr-3 rounded' src={course.img} alt="" />
                                    <a href={`/${course.id}`}><p className='font-semibold text-sm hover:text-[brown]'>{course.title}</p></a>
                                </div>).slice(0, 3)
                                    :
                                    courses.map(course => <div className='flex py-3'>
                                        <img className='w-24 h-16 mr-3 rounded' src={course.img} alt="" />
                                        <a href={`/${course.id}`}> <p className='font-semibold text-sm hover:text-[brown]'>{course.title}</p></a>
                                    </div>).slice(0, 5)
                            }



                        </div>

                        {
                            !more &&
                            <button onClick={seeMore} className='cursor-pointer btn border-[black] btn-sm btn-ghost normal-case'>See less </button>

                        }
                        {more &&
                            <button onClick={seeLess} className='cursor-pointer btn border-[black] btn-sm btn-ghost normal-case'>See more </button>


                        }
                    </div>

                    <div className='card bg-[white] p-4 my-4' >
                        <h1 className='mb-3 font-bold'>Stay Connected With Scholars </h1>
                        <div className='divide divide-y'>
                            {
                                more2 ? courses.map(course => <div className='p-2'>
                                    <div className='flex items-center mb-1'>
                                        <img className='w-24 h-16 mr-3 rounded' src={course.img2} alt="" />
                                        <a href="/about"><p className='font-semibold text-xs hover:text-[brown]'>{course.guided}</p></a>
                                    </div>
                                    <button className='btn btn-xs bg-[white] border-[brown] btn-ghost text-[brown] ml-20'>Connect</button>
                                </div>).slice(0, 3)
                                    :
                                    courses.map(course => <div className='p-2'>
                                        <div className='flex items-center mb-1'>
                                            <img className='w-24 h-16 mr-3 rounded' src={course.img2} alt="" />
                                            <a href="/about"><p className='font-semibold text-xs hover:text-[brown]'>{course.guided}</p></a>
                                        </div>
                                        <button className='btn btn-xs bg-[white] border-[brown] btn-ghost text-[brown] ml-20'>Connect</button>
                                    </div>).slice(0, 5)
                            }



                        </div>

                        {
                            !more2 &&
                            <button onClick={seeMore2} className='cursor-pointer btn border-[black] btn-sm btn-ghost normal-case'>See less </button>

                        }
                        {more2 &&
                            <button onClick={seeLess2} className='cursor-pointer btn border-[black] btn-sm btn-ghost normal-case'>See more </button>


                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;