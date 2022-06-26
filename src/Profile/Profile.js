import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Profile = () => {

    const [user] = useAuthState(auth);


    return (
        <div className=' bg-slate-100 pt-20 relative'>
            <div style={{ zIndex: '0', backgroundColor: 'black', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: "url('https://img.freepik.com/free-photo/pot-candle-near-opened-book_23-2147868944.jpg?w=1060&t=st=1656146380~exp=1656146980~hmac=af7cc09e02975d9bee831c7c01782a640e959c0d8d6a98cc1f0766dd8a5565b5')" }}
                class=" mx-auto relative md:w-[70%] shadow overflow-hidden sm:rounded-t-lg relative ">
                <div class="px-4 py-5 sm:px-6 h-[250px] md:h-[300px]" >

                    <p className='absolute top-[2%] left-[68.5%] md:left-[88%] btn btn-xs my-3 border-[white]'>Change Cover</p>

                </div>
            </div>


            <div style={{ zIndex: '20' }} className='under bg-[white] pt-20 md:w-[70%] mx-auto '>

                <img class="md:w-36 w-32 border border-[white] border-4 absolute bottom-[66%] right-[61%]  md:bottom-[55%] md:right-[74%]  rounded-full  "
                    src="https://i.stack.imgur.com/frlIf.png" alt='' />
                    
                <button className='absolute bottom-[65.5%] right-[2%]  md:bottom-[54%] md:right-[16%] btn btn-xs my-3 border-[white]'><a href="/edit-profile">Edit profile</a></button>


                <p class=" absolute bottom-[63.5%] right-[34%]  md:bottom-[51%] md:right-[63.7%] md:text-2xl text-[black] text-lg leading-6 font-medium  rounded ">{user?.email}</p>

                <div class="shadow overflow-hidden sm:rounded-b-lg ">

                    <div class=" border-gray-200">
                        <dl >

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
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><button className='btn btn-xs'><a href="/courses">My Courses</a></button></dd>
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
    );
};

export default Profile;