import React from 'react';
import { useParams } from 'react-router';
import EnrollCourse from '../EnrollCourse/EnrollCourse';
import Loading from '../Shared/Loading';
import useCourses from '../Shared/useCourses';


const Details = () => {


    const { id } = useParams()

    const [courses, setCourses] = useCourses()



    const course = courses?.find(item => id == item?.id)

    console.log(courses, course);

    if (!courses.length) {
        return <Loading></Loading>
    }

    return (
        <div className='w-[80%] mx-auto py-10 md:grid grid-cols-8 gap-10'>
            
            <div className='col-span-6'>
                <h1 className='text-xl md:text-4xl mb-8 font-semibold mt-20'>
                    {course?.title}
                </h1>
                <div className='md:flex items-center'>
                    <img loading='lazy' className='w-20 h-20 border border-[brown] p-1 mr-5 rounded-full'
                        src={course?.img2}
                        alt="" />
                    <p className='mb-3 mr-20'>
                        <p className='text-[gray]'>Guided by </p>

                        <p className='text-[brown]'>{course?.guided}</p>
                    </p>

                    <p className='mb-3 md:ml-5'>
                        <p className='text-[gray]'>Catagory</p>
                        <p className='text-[black]'>{course?.topic}</p>
                    </p>
                </div>

                <div className='grid grid-cols-12 gap-5'>
                    <div class="divider mt-6 col-span-5 h-[3%] bg-[brown]"></div>
                    <div class="divider mt-4 col-span-7"></div>
                </div>

                <img loading='lazy' className='my-5' src={course?.img} alt="" />

                <p>{course?.description}</p>
                <p>
                    Testing the Trinity: Tradition or Taught by Jesus? <span className='font-bold'>is an advanced course that seeks to provide a rigorous theological analysis of the Christian doctrine of the Trinity. </span> In this course, we discuss the Qur’an’s position on the Trinity and demonstrate that not only does the Qur’an not misrepresent the Trinity, but it shows familiarity with Christian creeds and critiques them with precision. The Trinity is defined from Christian sources and its historical context is given with the benefit of students in mind.

                    Can God be dependent? <br /> <br /> This is an issue we explore given Nicaea’s proclamation of the eternal generation of the Son.  Is the Trinity difficult for you to understand? You’re not alone. <span className='font-bold'>The logical problem of the Trinity is well-known and has been discussed by Christian scholars from the 4th century until the present day.</span>  We detail the problem acknowledged by Gregory of Nyssa down to William Lane Craig today. What is it and what are the common responses to it? If God is perfectly loving, then the Trinity is true. This is a common apologetic aimed at undermining the Muslim conception of God. This course explains the argument and provides objections to it.

                    The knowledge gained in this course will be summarized and shown how to apply it practically in dawah to Christians. <br /> <br /><span className='font-bold'> You will gain a greater appreciation of Tawheed</span> and have an alternative approach to critiquing the core doctrines of the Christian faith that is not dependent upon getting into an argument over the interpretation of Biblical passages. This course is designed for anyone interested in gaining a deeper understanding of the Trinity to expand one’s approach of dawah to Christians.
                </p>

                <div className='grid grid-cols-9 gap-4'>
                    <div class="divider mt-6 h-[3%] col-span-2 bg-[brown]"></div>
                    <div class="divider mt-4 col-span-7"></div>
                </div>

                <div className='md:flex mt-10'>
                    <img loading='lazy' className='w-60 p-1 border border-[brown]'
                        src={course?.img2}
                        alt="" />
                    <p className='ml-5'>
                        <p className='text-[brown] mb-4 font-semibold'>{course?.guided}</p>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae vel expedita nihil distinctio repudiandae ipsam deserunt quas nesciunt ex impedit nobis commodi, magnam deleniti! Dolores enim exercitationem magnam porro.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus necessitatibus perferendis laborum nam saepe quis vero molestias, error repellendus rem non nemo eaque consectetur eligendi odit repellat iusto in quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam inventore, suscipit labore delectus velit soluta unde cumque quas aliquid ratione sed nesciunt asperiores culpa natus optio porro sequi, officiis debitis?
                    </p>
                </div>


            </div>

            <div className='mt-20   '>
                <p className=' divide divide-y border md:w-[300%] border-t-white p-5 '>
                <button className='btn bg-[grey] text-[white] border-none  hover:bg-[brown] '> <a href={`/enroll/${course?.id}`}>Enroll Now</a> </button>
           
           <p className='my-7 font-semibold text-lg'>Enrolled Student : 2k +</p>
           <p className='my-7 font-semibold text-lg'>Lectures : {course?.lectures}</p>
           <p className='my-7 font-semibold text-lg'>Duration : {course?.duration} hrs</p>
           <p className='my-7 font-semibold text-lg'>Weeky Live Sessions</p>
                </p>
            </div>



        </div>
    );
};

export default Details;