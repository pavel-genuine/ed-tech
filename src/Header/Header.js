import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
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


    const personalizeItems =
        <> {
            user &&
            <div class="dropdown dropdown-end">
                <label tabindex="0" htmlFor='toggler2' class="btn  btn-ghost btn-circle">
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span class="badge bg-[brown] border-none text-[white] badge-sm indicator-item">3</span>
                    </div>
                </label>
                <input type="checkbox" name="" id="toggler2" />

                <div tabindex="0" class="notification mt-3 card card-compact dropdown-content w-52 bg-[black] bg-opacity-60 shadow">
                    <div class="card-body text-[white] ">
                        <p> <span class="font-bold">1 Items  </span>  <span class="text-info">Awesome</span>   </p>
                        <p>  <span class="font-bold">2 Items  </span>  <span class="text-info">Outstanding</span>   </p>
                        <p>  <span class="font-bold">3 Items  </span>  <span class="text-info">xciting</span>   </p>
                    </div>
                </div>
            </div>
        }

            {


                user && <div class="dropdown dropdown-end ">



                    <input type="checkbox" name="toggle" id="toggler" />

                    <label tabindex="0" htmlFor="toggler" name="toggle" class="btn btn-ghost btn-circle avatar">
                        <div class="w-9 border border-[brown] rounded-full" >
                            <img
                                src="https://i.stack.imgur.com/frlIf.png" />
                        </div>
                    </label>
                    <ul tabindex="0" class="profile space-y-4 divide divide-y mt-2  w-[450%] card card-compact  dropdown-content pl-4 pr-1 pt-4 pb-4 shadow-xl bg-[black] bg-opacity-60 rounded-box w-52">



                        <div className='space-y-2'>
                            <Link to="/profile">
                                <li>
                                    <img className='w-14 border border-[brown]  rounded-full'
                                        src="https://i.stack.imgur.com/frlIf.png" />
                                </li>
                            </Link>
                            <Link to="/profile">
                                <li className='font-semibold text-[white]  text-lg hover:text-[brown]  word-break'>{user.displayName}</li>
                            </Link>
                            <li className='text-[white] text-sm  break-all'>{user.email}</li>
                            <li>

                                <Link to='/profile' class="  btn bg-[brown] border-none text-[white] btn-xs mx-auto">
                                    View Profile
                                </Link>
                            </li>
                        </div>



                        <div className='space-y-2 pt-4'>

                            <li><a className='btn btn-outline btn-xs text-[white]'>Settings</a></li>
                            <li><button onClick={logout} className='btn btn-xs'>Logout</button></li>

                        </div>


                    </ul>
                </div>

            }</>


    const menuItems =
        <>

            <CustomLink class=" btn-ghost hover:rounded md:p-3 md:m-5" to='/'>Home</CustomLink>
            <CustomLink class="btn-ghost hover:rounded md:p-3 md:m-5" to='/courses'>All Courses</CustomLink>
            <CustomLink class="btn-ghost hover:rounded md:p-3 md:m-5" to='/promo'>Promo</CustomLink>

            <CustomLink class="btn-ghost hover:rounded md:p-3 md:m-5" to='about'> About Us</CustomLink>
            <CustomLink class="btn-ghost hover:rounded md:p-3 md:m-5" to='/contact'>Contact Us</CustomLink>
        </>


    return (
        <div>

            <div id='' className=
                'nav fixed bg-[black] bg-opacity-60  backdrop-filter backdrop-blur-sm   text-[white] shadow '
            >
                <div class="lg:navbar lg:w-[82%] mx-auto ">
                    <div class="lg:navbar-start hidden md:block">


                        <Link to='/' class="btn btn-ghost normal-case text-xl ">Islamicademy</Link>
                    </div>




                    <div className='lg:hidden flex justify-between items-center p-2'>
                        <div class="dropdown">
                            <label htmlFor='menuToggler' tabindex="0" class="btn btn-ghost ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <input type="checkbox" name="" id="menuToggler" />


                            <ul tabindex="0" id="menuContent" class=" menu bg-[black] text-[white]  bg-opacity-60 menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52">
                                {menuItems}
                            </ul>
                            <Link to='/' class="btn btn-ghost normal-case text-xl y">Islamicademy</Link>

                        </div>
                        {personalizeItems}
                    </div>



                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal mt-[1%] mx-28 pb-[.6%]">
                            {menuItems}
                        </ul>
                    </div>



                    <div class="navbar-end ml-4    hidden lg:block mb-[-1%]">


                        <div className='flex items-center pb-2'>
                            {
                                user &&
                                <div class="dropdown dropdown-end">
                                    <label tabindex="0" htmlFor='bigToggler2' class="btn  btn-ghost btn-circle">
                                        <div class="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                            <span class="badge bg-[brown] border-none text-[white] badge-sm indicator-item">3</span>
                                        </div>
                                    </label>
                                    <input type="checkbox" name="" id="bigToggler2" />

                                    <div tabindex="0" class="notification mt-3 card card-compact dropdown-content w-52 bg-[black] bg-opacity-60 shadow">
                                        <div class="card-body text-[white] ">
                                            <p> <span class="font-bold">1 Items  </span>  <span class="text-info">Awesome</span>   </p>
                                            <p>  <span class="font-bold">2 Items  </span>  <span class="text-info">Outstanding</span>   </p>
                                            <p>  <span class="font-bold">3 Items  </span>  <span class="text-info">xciting</span>   </p>
                                        </div>
                                    </div>
                                </div>
                            }

                            {


                                user && <div class="dropdown dropdown-end ">



                                    <input type="checkbox" name="toggle" id="bigToggler" />

                                    <label tabindex="0" htmlFor="bigToggler" name="toggle" class="btn ml-4 btn-ghost btn-circle avatar">
                                        <div class="w-9 border border-[brown] rounded-full" >
                                            <img
                                                src="https://i.stack.imgur.com/frlIf.png" />
                                        </div>
                                    </label>
                                    <ul tabindex="0" class="profile space-y-4 divide divide-y mt-2  w-[350%] card card-compact  dropdown-content pl-4 pr-1 pt-4 pb-4 shadow-xl bg-[black] bg-opacity-60 rounded-box w-52">



                                        <div className='space-y-2'>
                                            <Link to="/profile">
                                                <li>
                                                    <img className='w-14 border border-[brown]  rounded-full'
                                                        src="https://i.stack.imgur.com/frlIf.png" />
                                                </li>
                                            </Link>
                                            <Link to="/profile">
                                                <li className='font-semibold text-[white]  text-lg hover:text-[brown]  word-break'>{user.displayName}</li>
                                            </Link>
                                            <li className='text-[white] text-sm  break-all'>{user.email}</li>
                                            <li>

                                                <Link to='/profile' class="  btn bg-[brown] border-none text-[white] btn-xs mx-auto">
                                                    View Profile
                                                </Link>
                                            </li>
                                        </div>



                                        <div className='space-y-2 pt-4'>

                                            <li><a className='btn btn-outline btn-xs text-[white]'>Settings</a></li>
                                            <li><button onClick={logout} className='btn btn-xs'>Logout</button></li>

                                        </div>


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