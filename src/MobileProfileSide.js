import React, { useState } from 'react';
import useCourses from './Shared/useCourses';

const MobileProfileSide = () => {
    
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
        <div>
            <div className='col-span-3 md:block hidden '>

<div className='card bg-[white] p-4 divide divide-y space-y-4'>
    <p className='text-xl text-[gray] font-semibold'>Today's Ayah For You </p>

    <div className="collapse collapse-arrow border-b-2">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-semibold  ">
            إِقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
        </div>
        <div className="collapse-content">
            <p>
                Read with the Name of your Rabb (with the knowledge that comprises your being), who created. <br /> || Alaq(95)-1

            </p>
        </div>
    </div>


</div>
<div className='card bg-[white] p-4 divide divide-y my-4 space-y-4'>
    <p className='text-xl text-[gray] font-semibold'>Today's Hadith For You </p>

    <div className="collapse collapse-arrow border-b-2">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-semibold  ">
            وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ وَمَا اجْتَمَعَ قَوْمٌ فِي بَيْتٍ مِنْ بُيُوتِ اللَّهِ يَتْلُونَ كِتَابَ اللَّهِ وَيَتَدَارَسُونَهُ بَيْنَهُمْ إِلاَّ نَزَلَتْ عَلَيْهِمُ السَّكِينَةُ وَغَشِيَتْهُمُ الرَّحْمَةُ وَحَفَّتْهُمُ الْمَلاَئِكَةُ وَذَكَرَهُمُ اللَّهُ فِيمَنْ عِنْدَهُ
        </div>
        <div className="collapse-content">
            <p>
                Whoever travels a path in search of knowledge, Allah will make easy for him a path to Paradise. People do not gather in the houses of Allah, reciting the book of Allah and studying it together, but that tranquility will descend upon them, mercy will cover them, angels will surround them, and Allah will mention them to those near him.

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
                <p className='font-semibold text-sm hover:text-[brown]'><a href={`/${course.id}`}>{course.title}</a></p>
            </div>).slice(0, 3)
                :
                courses.map(course => <div className='flex py-3'>
                    <img className='w-24 h-16 mr-3 rounded' src={course.img} alt="" />
                    <p className='font-semibold text-sm hover:text-[brown]'><a href={`/${course.id}`}>{course.title}</a></p>
                </div>).slice(0, 5)
        }



    </div>

    {
        !more &&
        <p onClick={seeMore} className='cursor-pointer btn border-[black] btn-sm btn-ghost normal-case'>See less </p>

    }
    {more &&
        <p onClick={seeLess} className='cursor-pointer btn border-[black] btn-sm btn-ghost normal-case'>See more </p>


    }
</div>

<div className='card bg-[white] p-4 my-4' >
    <h1 className='mb-3 font-bold'>Stay Connected With Scholars </h1>
    <div className='divide divide-y'>
        {
            more2 ? courses.map(course => <div className='p-2'>
                <div className='flex items-center mb-1'>
                    <img className='w-24 h-16 mr-3 rounded' src={course.img2} alt="" />
                    <p className='font-semibold text-xs hover:text-[brown]'><a href="/about">{course.guided}</a></p>
                </div>
                <button className='btn btn-xs bg-[brown] btn-ghost text-[white] ml-20'>Connect</button>
            </div>).slice(0, 3)
                :
                courses.map(course => <div className='p-2'>
                    <div className='flex items-center mb-1'>
                        <img className='w-24 h-16 mr-3 rounded' src={course.img2} alt="" />
                        <p className='font-semibold text-xs hover:text-[brown]'><a href="/about">{course.guided}</a></p>
                    </div>
                    <button className='btn btn-xs bg-[brown] btn-ghost text-[white] ml-20'>Connect</button>
                </div>).slice(0, 5)
        }



    </div>

    {
        !more2 &&
        <p onClick={seeMore2} className='cursor-pointer btn border-[black] btn-sm btn-ghost normal-case'>See less </p>

    }
    {more2 &&
        <p onClick={seeLess2} className='cursor-pointer btn border-[black] btn-sm btn-ghost normal-case'>See more </p>


    }
</div>
</div>
        </div>
    );
};

export default MobileProfileSide;