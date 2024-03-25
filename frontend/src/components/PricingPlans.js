import React from "react";

const PricingPlans = () => {
  return (
    <div class='pb-28 sm:pb-0'>
      <div class='lg:h-[767px] bg-orange-100'>
        <div class='max-w-7xl min-h-screen mx-auto p-4 sm:p-10 lg:py-20'>
          <div class='max-w-5xl mx-auto text-center text-black tracking-widest pb-10 lg:pb-20'>
            <h1 class='text-3xl sm:text-5xl font-black'>OUR PRICE</h1>
          </div>

          <div class='flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 lg:mt-4'>
            <div class='flex-1 w-full mb-6 bg-white rounded-xl shadow-xl lg:scale-95'>
              <div class='text-center p-12'>
                <p class='text-3xl lg:text-2xl xl:text-3xl pb-4'>Basic</p>
                <div class='flex justify justify-center items-center'>
                  <span class='font-extrabold text-4xl lg:text-4xl xl:text-5xl align-text-middle px-3'>
                    Free
                  </span>
                </div>
              </div>
              <div class='bg-gray-100 rounded-b-xl border-t-2 border-gray-200/20 p-10'>
                <ul class='space-y-4'>
                  <li class='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='h-6 w-6 mr-3 text-green-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span class='text-gray-500'>
                      Store up to 100 npm packages.
                    </span>
                  </li>
                  <li class='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='h-6 w-6 mr-3 text-green-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span class='text-gray-500'>
                      Access to basic search functionality.
                    </span>
                  </li>
                  <li class='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='h-6 w-6 mr-3 text-green-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span class='text-gray-500'>
                      Limited customization options.
                    </span>
                  </li>
                </ul>
                <button
                  type='button'
                  class='w-full text-center bg-white text-lg text-orange-600 mt-8 p-3 rounded shadow-xl transition hover:text-white hover:bg-orange-600'>
                  Choose plan
                </button>
              </div>
            </div>
            <div class='lg:max-w-max mb-6 relative w-full bg-white rounded-xl shadow-xl border-2 border-orange-600 lg:scale-110 z-10'>
              <div class='text-center p-12'>
                <p class='text-3xl lg:text-2xl xl:text-3xl pb-4 font-semibold'>
                  Growth
                </p>
                <div class='flex justify justify-center items-center'>
                  <span class='font-extrabold text-4xl lg:text-4xl xl:text-5xl align-text-middle px-3'>
                    $ 4.99
                  </span>
                  <span class='font-normal text-xl text-gray-500 inline-block align-text-middle'>
                    /month
                  </span>
                </div>
              </div>
              <div class='bg-gray-100 rounded-b-xl border-t-2 border-gray-200/20 p-10'>
                <ul class='space-y-4'>
                  <li class='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='h-6 w-6 mr-3 text-green-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span class='text-gray-500'>
                      Store up to 500 npm packages.
                    </span>
                  </li>
                  <li class='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='h-6 w-6 mr-3 text-green-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span class='text-gray-500'>
                      Advanced search functionality
                    </span>
                  </li>
                  <li class='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='h-6 w-6 mr-3 text-green-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span class='text-gray-500'>
                      Enhanced customization options and folder organization
                    </span>
                  </li>
                  <li class='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='h-6 w-6 mr-3 text-green-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span class='text-gray-500'>
                      Priority email support with faster response times.
                    </span>
                  </li>
                </ul>
                <button
                  type='button'
                  class='w-full text-center bg-orange-600 text-lg text-white mt-8 p-3 rounded shadow-xl transition hover:text-white hover:bg-orange-700'>
                  Choose plan
                </button>
              </div>
              <div class='absolute rounded-full w-40 bg-orange-600 text-white text-center text-sm tracking-wider px-4 py-1 -top-3 inset-x-0 mx-auto'>
                MOST POPULAR
              </div>
            </div>
            <div class='flex-1 w-full mb-6 bg-white rounded-xl shadow-xl lg:scale-95'>
              <div class='text-center p-12'>
                <p class='text-3xl lg:text-2xl xl:text-3xl pb-4'>Pro</p>
                <div class='flex justify justify-center items-center'>
                  <span class='font-extrabold text-4xl lg:text-4xl xl:text-5xl align-text-middle px-3'>
                    $ 9.99
                  </span>
                  <span class='font-normal text-xl text-gray-500 inline-block align-text-middle'>
                    /month
                  </span>
                </div>
              </div>
              <div class='bg-gray-100 rounded-b-xl border-t-2 border-gray-200/20 p-10'>
                <ul class='space-y-4'>
                  <li class='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='h-6 w-6 mr-3 text-green-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span class='text-gray-500'>
                      Store unlimited npm packages.
                    </span>
                  </li>
                  <li class='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='h-6 w-6 mr-3 text-green-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span class='text-gray-500'>
                      Advanced organization features
                    </span>
                  </li>
                  <li class='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='h-6 w-6 mr-3 text-green-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span class='text-gray-500'>
                      Priority email and phone support
                    </span>
                  </li>
                </ul>
                <button
                  type='button'
                  class='w-full text-center bg-white text-lg text-orange-600 mt-8 p-3 rounded shadow-xl transition hover:text-white hover:bg-orange-600'>
                  Choose plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
