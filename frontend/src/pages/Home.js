import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className='flex flex-col text-center pb-8'>
      <section className='p-24 bg-gradient-to-r from-red-600 to-yellow-400 text-white '>
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
      </section>

      {/* Features Section */}
      <section className='p-24 grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='text-center'>
          <h2 className='text-xl font-bold mb-2 text-orange-600'>
            Effortless Organization
          </h2>
          <p className='text-gray-700'>
            Keep all your essential npm packages in one place for easy access
            whenever you need them.
          </p>
        </div>
        <div className='text-center'>
          <h2 className='text-xl font-bold mb-2 text-orange-600'>
            Streamline Your Workflow
          </h2>
          <p className='text-gray-700'>
            Say goodbye to searching for specific libraries. With Packages Hub,
            your favorite tools are just a click away.
          </p>
        </div>
        <div className='text-center'>
          <h2 className='text-xl font-bold mb-2  text-orange-600'>
            Tailored for You
          </h2>
          <p className='text-gray-700'>
            Customize your hub with the packages you use most frequently. No
            more forgetting the names or hunting them down each time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className='text-center m-8'>
        <h3 className='text-3xl font-bold mb-4 text-orange-600'>
          Join the Community
        </h3>
        <p className='text-lg text-gray-700 mb-2'>
          Sign up now and take control of your development toolkit with Packages
          Hub. It's free and always will be!
        </p>
        <Link
          to='/signup'
          className='inline-block bg-orange-400 mt-8 py-3 px-6 rounded-lg text-white hover:bg-orange-600 transition duration-300'>
          Sign Up Now
        </Link>
      </section>
    </main>
  );
};

export default Home;
