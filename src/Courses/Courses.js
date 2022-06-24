import React from 'react';
import useCourses from '../Shared/useCourses';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {

    const [courses,setCourses] =useCourses()

    
console.log(courses);

    return (
      <div className=' py-10'>
        
        <h1 className='md:text-4xl  text-center text-xl mb-8 ml-5 font-semibold'>Featured Courses :</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-[80%]  mx-auto '>
            {
                courses?.map(course=><SingleCourse key={course.id} course={course} ></SingleCourse>)
            }
        </div>
      </div>
    );
};

export default Courses;