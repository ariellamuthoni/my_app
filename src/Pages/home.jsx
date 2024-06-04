import React from 'react';
import { HeroRight } from '../components';
import FAQ from '../components/FAQ\'s';
// import { HeroLeft } from '../components';

const HeroSection = () => {
  return (
    <>
    <div className='flex flex-col md:col-1'>
       <HeroRight />
       {/* <Card/> */}
      
    </div>
    </>
  )
}
const Home = () => {
  console.log('Home component rendered');
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default Home;
