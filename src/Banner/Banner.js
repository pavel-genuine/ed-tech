import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import './Banner.css'

const Banner = () => {

    const [user] = useAuthState(auth);


    return (
        <div class="hero md:min-h-[90vh] banner md:bg-cover">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">...To The Light</h1>
                    <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                   { user ? " " :
                    <div>
                    <a href="/sign-up">
                         <button class="btn bg-[navy] mx-5">Sign Up</button> or
                     </a>
                     <a href="/sign-in">
                     <button class="btn bg-[brown] mx-5" >Sign In</button>
                     </a>
                    </div>
                   }
                </div>
            </div>
        </div>
    );
};

export default Banner;