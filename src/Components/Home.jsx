import React, { Fragment } from 'react'
import Slider from "react-slick";
import bg1 from '../Assets/gym1.jpg'
import bg2 from '../Assets/gym2.jpg'
import bg3 from '../Assets/gym3.jpg'
import bg4 from '../Assets/gym4.jpg'
import bg7 from '../Assets/gym7.jpg'
import bg6 from '../Assets/gym6.jpg'

const Home = () => {
  return (
    <Fragment>
    <div className='w-full  lg:h-screen md:h-5/6 overflow-hidden mx-auto'>
    <Slider dots={true} fade={true} autoplaySpeed={3000} infinite = {true}slidesToScroll ={1} autoplay={true}>
      <div className='w-5/6 h-full mx-auto my-0 relative'>
        <div className='w-full h-5/6 p-3'>
          <h1 className='absolute left-10 z-10 top-1/4 font-sans font-bold md:text-6xl text-xl'>Don't which for it, Work for it.</h1>
          <img className='relative mx-auto my-0 w-full h-5/6 bg-cover object-cover rounded-lg opacity-75' alt='img' src={bg2}/>
        </div>
      </div>
      <div>
        <div className='w-full h-5/6 p-3'>
          <h1 className='absolute left-10 z-10 top-1/4 font-sans font-bold md:text-6xl text-xl'>Everything is hard before it is easy</h1>
          <img className='relative mx-auto my-0 w-full h-5/6 bg-cover object-cover rounded-lg opacity-75 ' alt='img3' src={bg3}/>
        </div>
      </div>
      <div>
        <div className='w-full h-5/6 p-3'>
          <h1 className='absolute left-10 z-10 top-1/4 font-sans font-bold md:text-6xl text-xl'>To be number one, you have to train like you’re number two</h1>
          <img className='relative mx-auto my-0 w-full h-5/6 bg-cover object-cover rounded-lg opacity-75' alt='img2' src={bg1}/>
        </div>
      </div>
      <div>
        <div className='w-full h-5/6 p-3'>
          <h1 className='absolute left-10 z-10 top-1/4 font-sans font-bold md:text-6xl text-xl'>Wake up with determination, go to bed with satisfaction</h1>
          <img className='relative mx-auto my-0 w-full h-5/6 bg-cover object-cover rounded-lg opacity-75' alt='img1' src={bg4}/>
        </div>
      </div>
    </Slider>
  </div>
  <section className='w-full flex gap-4 p-5 lg:flex-row md:flex-col flex-col justify-evenly items-center'>
    <div className='font-bold md:text-5xl text-3xl text-center'>Welcome To React Fitness</div>
    <div className='lg:w-1/4 md:1/2 h-1/2 bg-green-400 text-black text-justify p-5 rounded-lg font-normal text-xl flex flex-col'>
      <p>The home of innovative and trailblazing fitness brands, equipment and experiences as well as fresh ideas and market knowledge to elevate your customer experience, drive commercial outcomes and make you stand out from your competitors.</p>
      <button className='bg-black text-white p-3 rounded-3xl text-center mx-auto my-0 relative'>Company</button>
    </div>
  </section>
  <hr className='h-0.2 bg-white w-full'></hr>
  <section className='w-full flex gap-5 p-5 flex-col justify-evenly items-center'>
  <div className='font-bold md:text-7xl text-3xl text-center'> Best Quality Equipment</div>
    <img className='md:w-1/2 rounded-3xl' alt='img' src={bg4}  />
    <div className='w-5/6 h-1/2 bg-pink-400 text-black gap-5 text-justify p-5 rounded-lg font-normal text-xl flex flex-col'>
      <p>The home of innovative and trailblazing fitness brands, equipment and experiences as well as fresh ideas and market knowledge to elevate your customer experience, drive commercial outcomes and make you stand out from your competitors.</p>
      <button className='bg-black text-white p-3 rounded-3xl text-center mx-auto my-0 relative'>Explore</button>
    </div>
  </section>
  <hr className='h-0.2 bg-white w-full'></hr>
  <section className='w-full flex gap-5 p-5 flex-col items-center justify-evenly '>
    <div className='flex md:flex-row  flex-col items-center p-2 gap-4 relative md:items-start'>
      <img className='md:w-1/2  rounded-3xl' alt='img' src={bg7}  />
      <img className='md:w-1/2 rounded-3xl md:my-40' alt='img' src={bg6}  />
    </div>
    <div className='font-bold md:text-7xl text-3xl text-center'>Professional Personal Trainer</div>
    <div className='w-5/6 h-1/2 bg-sky-500 text-black gap-5 text-justify p-5 rounded-lg font-normal text-xl flex flex-col'>
      <p>The home of innovative and trailblazing fitness brands, equipment and experiences as well as fresh ideas and market knowledge to elevate your customer experience, drive commercial outcomes and make you stand out from your competitors. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut possimus exercitationem iste, eos mollitia assumenda? Maxime soluta expedita, nulla fuga alias dicta excepturi error asperiores eaque quod, eos ipsum deserunt?</p>
      <button className='bg-black text-white p-3 rounded-3xl text-center mx-auto my-0 relative'>Explore</button>
    </div>
  </section>
  </Fragment>
  )
}

export default Home