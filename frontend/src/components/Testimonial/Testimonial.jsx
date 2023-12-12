// import react from 'react'
// import Swiper, {  Pagination } from 'swiper';
// import { SwiperSlide } from 'swiper/react'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import patientAvatar from '../../assets/images/patient-avatar.png'
// import { HiStar } from 'react-icons/hi'
// const Testimonial = () => {
//   return (
//     <div className="mt-[30px] lg:mt-[55px]">
//       <Swiper
//         modules={[Pagination]}
//         spaceBetween={30}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//           },
//         }}
//       >
//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-[13px]">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
//                   MUhibur Rahman
//                 </h4>
//                 <div className="flec items-center gap-[2px]">
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                 </div>
//               </div>
//             </div>
//             <p  className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
//                i have taken medical services form them. they treat so well and they are providing the best medical services.
//             </p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-[13px]">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
//                   MUhibur Rahman
//                 </h4>
//                 <div className="flec items-center gap-[2px]">
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                 </div>
//               </div>
//             </div>
//             <p  className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
//                i have taken medical services form them. they treat so well and they are providing the best medical services.
//             </p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-[13px]">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
//                   MUhibur Rahman
//                 </h4>
//                 <div className="flec items-center gap-[2px]">
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                 </div>
//               </div>
//             </div>
//             <p  className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
//                i have taken medical services form them. they treat so well and they are providing the best medical services.
//             </p>
//           </div>
//         </SwiperSlide>


//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-[13px]">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
//                   MUhibur Rahman
//                 </h4>
//                 <div className="flec items-center gap-[2px]">
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                 </div>
//               </div>
//             </div>
//             <p  className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
//                i have taken medical services form them. they treat so well and they are providing the best medical services.
//             </p>
//           </div>
//         </SwiperSlide>


//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-[13px]">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
//                   MUhibur Rahman
//                 </h4>
//                 <div className="flec items-center gap-[2px]">
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                 </div>
//               </div>
//             </div>
//             <p  className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
//                i have taken medical services form them. they treat so well and they are providing the best medical services.
//             </p>
//           </div>
//         </SwiperSlide>



//       </Swiper>
//     </div>
//   )
// }

// export default Testimonial



import React, { useState } from 'react';
import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';

const Testimonial = () => {
    const testimonials = [
        {
          name: 'Muhibur Rahman',
          rating: 5,
          comment: 'I have taken medical services from them. They treat so well and provide the best medical services.',
        },
        {
          name: 'Muhibur Rahman',
          rating: 5,
          comment: 'I have taken medical services from them. They treat so well and provide the best medical services.',
        },
        {
          name: 'Muhibur Rahman',
          rating: 5,
          comment: 'I have taken medical services from them. They treat so well and provide the best medical services.',
        },
        {
          name: 'Muhibur Rahman',
          rating: 5,
          comment: 'I have taken medical services from them. They treat so well and provide the best medical services.',
        },
        {
            name: 'Muhibur Rahman',
            rating: 5,
            comment: 'I have taken medical services from them. They treat so well and provide the best medical services.',
          },
          {
            name: 'Muhibur Rahman',
            rating: 5,
            comment: 'I have taken medical services from them. They treat so well and provide the best medical services.',
          },
          {
            name: 'Muhibur Rahman',
            rating: 5,
            comment: 'I have taken medical services from them. They treat so well and provide the best medical services.',
          },
          {
              name: 'Muhibur Rahman',
              rating: 5,
              comment: 'I have taken medical services from them. They treat so well and provide the best medical services.',
            },
            {
              name: 'Muhibur Rahman',
              rating: 5,
              comment: 'I have taken medical services from them. They treat so well and provide the best medical services.',
            },
            
          
    
        // Add more testimonials as needed
      ];
    

  const itemsPerPage = 3; // Set the number of testimonials to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTestimonials = testimonials.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <div className="flex flex-wrap justify-center">
        {currentTestimonials.map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 py-[30px] px-5 rounded-[13px]">
            {/* Testimonial content */}
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  {testimonial.name}
                </h4>
                <div className="flex items-center gap-[2px]">
                  {[...Array(testimonial.rating)].map((star, index) => (
                    <HiStar key={index} className="text-yellowColor w-[18px] h-5" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">{testimonial.comment}</p>
          </div>
        ))}
      </div>

      {/* Pagination as Bullets */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 p-2 rounded-full ${currentPage === index + 1 ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
