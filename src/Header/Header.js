import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import './Header.css'

const Header = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken');
    };


    const [background, setBackground] = useState(false)

    const changeBackground = () => {

        if (window.scrollY >= 80) {
            setBackground(true)

        } else {
            setBackground(false)

        }
    }

    window.addEventListener('scroll', changeBackground)


    return (
        <div className=''>

            <div id='navbar' className={background ?
                'nav bg-[white]   text-[black] shadow '
                :
                'nav text-[black]  shadow'}>
                <div class="navbar w-[95%] mx-auto ">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a href='/'>Home</a></li>
                                <li><a href='/courses'>All Courses</a></li>
                                <li tabindex="0">
                                    <a class="justify-between">
                                        Explore
                                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </a>
                                    <ul class="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a href='/about'>About Us</a></li>
                                <li><a href='/courses' class="btn bg-[brown] hidden normal-case"> Suscribe </a></li>

                            </ul>
                        </div>
                        <a href='/' class="btn btn-ghost normal-case text-xl">Islamicademy</a>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            <li><a class="btn btn-ghost normal-case" href='/'>Home</a></li>
                            <li><a class="btn btn-ghost normal-case" href='/courses'>All Courses</a></li>
                            <li tabindex="0">
                                <a class="btn btn-ghost normal-case">
                                    Explore More
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul class="p-2 bg-[grey] divide divide-y">
                                    <li><a class="btn btn-ghost normal-case text-[white]">Submenu 1</a></li>
                                    <li><a class="btn btn-ghost normal-case text-[white]">Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a href='/about' class="btn btn-ghost normal-case">About Us</a></li>
                        </ul>
                    </div>



                    <div class="navbar-end">
                        <div class="flex items-center ">

                            <a href='/courses' class="btn btn-sm border-none md:mx-20 bg-[brown] hidden normal-case text-[white]"> SUBSCRIBE </a>

                            <div class="dropdown dropdown-end">
                                <label tabindex="0" class="btn btn-ghost btn-circle">
                                    <div class="mr-2 indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                        <span class="badge bg-[brown] border-none text-[white] badge-sm indicator-item">3</span>
                                    </div>
                                </label>
                                <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                    <div class="card-body">
                                        <p> <span class="font-bold">1 Items  </span>  <span class="text-info">Awesome</span>   </p>
                                        <p>  <span class="font-bold">2 Items  </span>  <span class="text-info">Outstanding</span>   </p>
                                        <p>  <span class="font-bold">3 Items  </span>  <span class="text-info">xciting</span>   </p>
                                    </div>
                                </div>
                            </div>
                            {

                                user && <div class="dropdown dropdown-end ">
                                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                        <div class="w-10 border border-[brown] rounded-full ml-2 ">
                                            <img 
                                            src="https://i.stack.imgur.com/frlIf.png" />
                                        </div>
                                    </label>
                                    <ul tabindex="0" class=" w-[500%] flex flex-col justify-center items-center dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <img className='w-16 border border-[brown]  rounded-full mx-auto' 
                                            src="https://i.stack.imgur.com/frlIf.png" />
                                        </li>

                                        <li className='font-semibold p-2 m-2'>{user.email}</li>

                                        <li>

                                            <a class="  btn bg-[brown] border-none text-[white] btn-sm justify-between">
                                                View Profile
                                            </a>
                                        </li>
                                        <div class="divider"></div> 
                                        <li><a className='btn btn-outline btn-sm'>Settings</a></li>
                                        <li><a onClick={logout} className='btn my-3 btn-sm'>Logout</a></li>
                                    </ul>
                                </div>

                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Header;