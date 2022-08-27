import React, { Fragment , useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const [Message , SetMessage] = useState(false);
  const handle_click = (e)=>{
    e.preventDefault();

    emailjs.sendForm('service_a7ohei7', 'template_h91ezgx', form.current, 'yM1w4Ow4tHuP04tur')
      .then((result) => {
          SetMessage(true);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
          SetMessage(false);
      });
  }
  return (
    <Fragment>
      <div className='bg-black w-full h-screen relative'>
        <div className='text-white w-full text-center top-20 text-4xl font-bold md:text-6xl relative'>
          Contact Form
        </div>
        <div className='bg-green-400 top-1/4 relative p-3 md:w-1/2 mx-auto my-0 rounded-xl'>
          <form ref={form} onSubmit={handle_click} className='text-black text-center flex flex-col gap-3'>
            <div className='flex justify-between sm:justify-evenly md:gap-4 gap-1'>
              <div className='flex  flex-col gap-1 items-center'>
                <label>*First Name</label>
                <input type={"text"} className ="bg-black text-white outline-0 rounded-md p-3 w-full"></input>
              </div>
              <div className='flex  flex-col gap-1 items-center'>
                <label>*Last Name</label>
                <input type={"text"} className ="bg-black text-white outline-0 rounded-md p-3 sm:w-3/4 w-full"></input>
              </div>
            </div>
            <div className='flex  flex-col gap-1 items-center'>
              <label>Email</label>
              <input type={"email"} className = "w-5/6  p-3 bg-black text-white outline-0 rounded-md"></input>
            </div>
            <div className='flex  flex-col gap-1 items-center'>
              <label>Message</label>
              <input type={"text"} name="message" className = "w-5/6  p-3 bg-black text-white outline-0 rounded-md"></input>
            </div>
            <div className='flex  flex-col gap-1 items-center'>
              <label>Additional Detail</label>
              <textarea className='w-5/6  p-3 bg-black text-white outline-0 rounded-md h-20'></textarea>
            </div>
            <div className='flex  flex-col gap-1 items-center'>
              <input type="submit" value="Send" className='w-1/4 bg-black text-white p-3 rounded-lg'></input>
            </div>
          </form>
          {
            Message === true ? (
              window.alert("Message has been sent")
            ):(
              <>
              </>
            )
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Contact