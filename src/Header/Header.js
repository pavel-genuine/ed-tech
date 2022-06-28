import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import CustomLink from '../CustomLink/CustomLink';
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

    const menuItems =
        <>
            <CustomLink class=" btn-ghost hover:rounded md:p-3 md:m-5" to='/'>Home</CustomLink>
            <CustomLink class="btn-ghost hover:rounded md:p-3 md:m-5" to='/courses'>All Courses</CustomLink>
            <CustomLink class="btn-ghost hover:rounded md:p-3 md:m-5" to='/more'>Explore More</CustomLink>

            <CustomLink class="btn-ghost hover:rounded md:p-3 md:m-5" to='about'> About Us</CustomLink>
            <CustomLink class="btn-ghost hover:rounded md:p-3 md:m-5" to='/contact'>Contact Us</CustomLink>
        </>


    return (
        <div className=''>

            <div id='' className={background ?
                'nav bg-[white] bg-opacity-60  backdrop-filter backdrop-blur-sm   text-[black] shadow '
                :
                'nav text-[black] bg-opacity-60  backdrop-filter-none backdrop-blur-sm shadow'}>
                <div class="navbar w-[95%] mx-auto ">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact bg-[white] dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>
                        <a href='/' class="btn btn-ghost normal-case text-xl">Islamicademy</a>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal mt-[1%] pb-[.6%]">
                            {menuItems}
                        </ul>
                    </div>



                    <div class="navbar-end">
                        <div class="flex items-center ">

                            <a href='/courses' class="btn btn-sm border-none md:mx-20 bg-[brown] hidden normal-case text-[white]"> SUBSCRIBE </a>

                            {
                                user &&
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
                            }
                            {

                                user && <div class="dropdown dropdown-end ">
                                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                        <div class="w-10 border border-[brown] rounded-full ml-2 " >
                                            <img
                                                src="https://i.stack.imgur.com/frlIf.png" />
                                        </div>
                                    </label>
                                    <ul tabindex="0" class=" w-[450%] card card-compact flex flex-col justify-center items-center dropdown-content mt-3 p-2 shadow-xl bg-base-100 rounded-box w-52">
                                        <li>
                                            <img className='w-16 border border-[brown]  rounded-full mx-auto'
                                                src="https://i.stack.imgur.com/frlIf.png" />
                                        </li>

                                        <li className='font-semibold text-s my-2 break-all'>{user.email}</li>

                                        <li>

                                            <a href='/profile' class="  btn bg-[brown] border-none text-[white] btn-xs justify-between">
                                                View Profile
                                            </a>
                                        </li>
                                        <div class="divider"></div>
                                        <li><a className='btn btn-outline btn-xs'>Settings</a></li>
                                        <li><a onClick={logout} className='btn my-3 btn-xs'>Logout</a></li>
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