"use client"
import { useState } from 'react';
import Image from 'next/image';
import { BsFillExclamationOctagonFill } from 'react-icons/bs';
import style from '../styles/Style.module.css'; // Make sure to import your CSS module
import Link from 'next/link';

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    // Simulate an asynchronous action (e.g., API request) with a setTimeout.
    setTimeout(() => {
      setIsLoading(false);
      setIsDone(true);

      // Reset to the initial state after a delay (e.g., 2 seconds).
      setTimeout(() => {
        setIsDone(false);
      }, 2000);
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <section className='bg-blue-100 p-2'>
      <section className='bg-white m-auto'>
        <h2 className='font-semibold text-[25px]'>Payment</h2>
        <section className='grid justify-center'>
          <section className='flex justify-center space-x-10 mb-5'>
            <Image
              src='/master.png'
              height={75}
              width={95}
              alt='visa'
              className='hover:bg-red-100 hover:border-red-400 hover:border-2 rounded-[8px] shadow-md shadow-red-300 hover:shadow-none'
            />
            {/* Add more payment method images here */}
          </section>

          {/* PAYMENT FORM */}
          <form action='#'>
            <label htmlFor='card' className='mb-[50px]'>
              <h2 className='mb-3 font-medium text-[17px]'>Cardholder name</h2>
              <input
                type='text'
                required
                name='name'
                id='card'
                className='border-[2px] border-red-100 rounded-[8px] h-[40px] w-full'
              />
            </label>

            <section className='flex mt-5'>
              <label htmlFor='number'>
                <h2 className='mb-3 font-medium text-[17px]'>Card number</h2>
                <input
                  type='text'
                  name='card-number'
                  required
                  id='number'
                  pattern='[0-9]{16}' // Corrected pattern
                  className='border-[2px] border-red-100 rounded-[8px] h-[40px]'
                />
              </label>

              <label htmlFor='date' className='mx-[8px]'>
                <h2 className='mb-3 font-medium text-[17px]'>Date</h2>
                <input
                  type='text'
                  name='date'
                  id='date'
                  placeholder='10/10'
                  className='border-[2px] border-red-100 rounded-[8px] h-[40px] w-[100px]'
                  required
                />
              </label>

              <label htmlFor='ccv'>
                <h2 className='mb-3 font-medium text-[17px]'>CCV</h2>
                <input
                  type='text'
                  name='ccv'
                  id='ccv'
                  placeholder='000'
                  className='border-[2px] border-red-100 rounded-[8px] h-[40px] w-[100px]'
                  required
                />
              </label>
            </section>

            <section className='flex my-7'>
              <section className='mr-1'>
                <BsFillExclamationOctagonFill className='text-blue-500' />
              </section>
              <section>
                <h2 className=' text-gray-500'>
                  {' '}
                  Credit card payment may take up to 30mins to be proceeded
                </h2>
              </section>
            </section>

            <label htmlFor='remember'>
              <input
                type='checkbox'
                name='remember'
                id='remember'
                className='h-4 w-4'
              />{' '}
              <span className='font-medium text-[16px] mb-5'>
                save my details for future purchases
              </span>
            </label>
            <br />
            <button
  className={`${style.button} ${
    isLoading ? style.loading : ''
  } ${isDone ? style.done : ''}`}
  onClick={handleClick}
  disabled={isLoading}
>
  <Link href="/">
  {isLoading ? 'Loading...' : isDone ? 'Completed' : 'Continue purchase'}
</Link>
</button>
  
          </form>
        </section>
      </section>
    </section>
  );
}
