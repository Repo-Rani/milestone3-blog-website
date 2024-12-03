import React from 'react'

const ContactForm = () => {
  return (
<section className='flex justify-center items-center min-h-screen'>
<form className='space-y-6 h-[45rem] md:w-[42rem] xsm:w-[21rem] sm:w-[19rem] xs:w-[18rem] bg-white shadow-md  shadow-gray-600'>
    <div className='ml-5 mr-5 mt-[5rem] '>
        <label className='block text-gray-600 text-sm font-medium mb-2 text-center '>Your Name</label>
        <input type="text" className='block w-full border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:border-[#F2613F] outline-none' />
    </div>

    <div className='ml-5 mr-5 mt-[5rem]'>
        <label className='block text-gray-600 text-center text-sm font-medium mb-2'>Your Email</label>
        <input type="email" className='block w-full border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:border-[#F2613F] outline-none' />
    </div>
    <div className='ml-5 mr-5 mt-[5rem]'>
        <label className='block text-gray-600 text-center text-sm font-medium mb-2'>Subject</label>
        <input type="text" className='block w-full border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:border-[#F2613F] outline-none' />
    </div>
    <div className='ml-5 mr-5 mt-[5rem]'>
        <label className='block text-gray-600 text-sm font-medium text-center mb-2'>Your Message</label>
        <textarea className='block w-full h-44 border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:border-[#F2613F] outline-none' />
    </div>

    <div className='text-center mt-[3rem] '>
     <button type='submit' className=' bg-[#F2613F] text-white md:font-semibold  md:py-3 md:px-4  py-2 px-3 rounded-md shadow-md hover:bg-white hover:text-[#F2613F] transition-all duration-300'>
        Send Message
     </button>
    </div>


</form>
</section>  )
}

export default ContactForm