import React from "react";
import { Link } from "react-router-dom";
import PricingPlans from "../components/PricingPlans";
import Testimonials from "../components/Testimonials";

import {
  RiFolderLine,
  RiSettingsLine,
  RiUserSettingsLine,
} from "react-icons/ri";

const Home = () => {
  return (
    <main className='flex flex-col text-center pb-8'>
      <section className='p-24 text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400'>
        <div className='md:max-w-[800px] mx-auto'>
          <h1 className='text-3xl md:text-6xl text-center font-sansserif font-bold mb-4'>
            Empower Your Development Journey
          </h1>
          <p className='text-md md:text-lg'>
            Packages Hub is your go-to solution for organizing your essential
            npm packages. Whether you're a seasoned developer or just starting
            out, Packages Hub makes it easy to save and access your favorite
            tools, empowering you to streamline your workflow effortlessly.
          </p>
        </div>
        <Link
          to='/signup'
          className='inline-block bg-black mt-20 py-3 px-6 rounded-lg text-white transition duration-300 '>
          Sign Up Now
        </Link>
      </section>

      {/* Features Section */}
      <section className='p-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:max-w-screen-xl mx-auto'>
        <div className='flex flex-col text-left rounded-lg border border-gray-300 p-10'>
          <div className='w-12 h-12 rounded-md bg-orange-100 flex items-center justify-center mb-4'>
            <RiFolderLine className='text-orange-600 text-3xl' />
          </div>
          <h2 className='text-xl font-bold mb-2 text-gray-800'>
            Effortless Organization
          </h2>
          <p className='text-gray-700'>
            Keep all your essential npm packages in one place for easy access
            whenever you need them.
          </p>
        </div>
        <div className='flex flex-col text-left rounded-md border border-gray-300 p-10'>
          <div className='w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4'>
            <RiSettingsLine className='text-3xl text-orange-600' />
          </div>
          <h2 className='text-xl font-bold mb-2 text-gray-800'>
            Streamline Your Workflow
          </h2>
          <p className='text-gray-700'>
            Say goodbye to searching for specific libraries. With Packages Hub,
            your favorite tools are just a click away.
          </p>
        </div>
        <div className='flex flex-col text-left rounded-md border border-gray-300 p-10'>
          <div className='w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4'>
            <RiUserSettingsLine className='text-3xl text-orange-600' />
          </div>
          <h2 className='text-xl font-bold mb-2 text-gray-800'>
            Tailored for You
          </h2>
          <p className='text-gray-700'>
            Customize your hub with the packages you use most frequently. No
            more forgetting the names or hunting them down each time.
          </p>
        </div>
      </section>

      <PricingPlans />
      <Testimonials />

      {/* CTA Section */}
      <section className='text-center mt-8'>
        <h3 className='text-5xl font-bold mb-4 text-orange-600'>
          Join the Community
        </h3>
        <p className='text-lg text-gray-700 mb-6'>
          Sign up now and take control of your development toolkit with Packages
          Hub
        </p>
        <Link
          to='/signup'
          className='inline-block my-8 bg-orange-500 hover:bg-orange-600 py-3 px-8 rounded-lg text-white transition duration-300'>
          Sign Up Now
        </Link>
      </section>
    </main>
  );
};

export default Home;
