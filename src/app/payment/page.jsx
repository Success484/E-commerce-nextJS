'use client'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { BsFillExclamationOctagonFill } from 'react-icons/bs';
import style from '../styles/Style.module.css';
import { FaFacebook, FaGoogle, FaInstagram, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const [date, setDate] = useState('');

  const handleDateChange = (event) => {
    const inputValue = event.target.value;

    if (/^\d{2}$/.test(inputValue)) {
      setDate(inputValue + '/');
    } else {
      setDate(inputValue);
    }
  };

  const handlePurchase = () => {
    if (areInputFieldsValid()) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setIsDone(true);

        setTimeout(() => {
          setIsDone(false);
        }, 2000);
      }, 2000);
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const areInputFieldsValid = () => {
    return (
      document.getElementById('card').checkValidity() &&
      document.getElementById('number').checkValidity() &&
      document.getElementById('date').checkValidity() &&
      document.getElementById('ccv').checkValidity()
    );
  };

  return (
    <section className="bg-blue-100 p-8">
      <section className="bg-white m-auto p-10 md:w-3/5 sm:w-full">
        <h2 className="font-semibold text-2xl md:text-4xl text-center mb-6">
          Payment
        </h2>
        <section className="grid md:grid-cols-2 gap-10">
          <section className="flex justify-center space-x-10 mb-5">
            <Image
              src="/master.png"
              height={20}
              width={300}
              alt="visa"
              className={`hover:bg-red-100 hover:border-red-400 hover:border-2 rounded-8 shadow-md shadow-red-300 hover:shadow-none${style.visa}`}
            />
          </section>

          <form action="#">
            <label htmlFor="card" className="mb-5">
              <h2 className="mb-3 font-medium text-xl">Cardholder name</h2>
              <input
                type="text"
                required
                name="name"
                id="card"
                className="border-2 border-red-100 rounded-8 h-10 w-full"
              />
            </label>

              <label htmlFor="number" className="w-full">
                <h2 className="mb-3 font-medium text-xl">Card number</h2>
                <input
                  type="text"
                  required
                  name="card-number"
                  id="number"
                  pattern="[0-9]{16}"
                  className="border-2 border-red-100 rounded-8 h-10 w-full"
                />
              </label>

            <section className="flex flex-col md:flex-row gap-5">
              <label htmlFor="date" className="w-full">
                <h2 className="mb-3 font-medium text-xl">Date</h2>
                <input
                  type="text"
                  name="date"
                  id="date"
                  placeholder="MM/YY"
                  className="border-2 border-red-100 rounded-8 h-10 w-full"
                  value={date}
                  onChange={handleDateChange}
                  required
                />
              </label>

              <label htmlFor="ccv" className="w-full">
                <h2 className="mb-3 font-medium text-xl">CCV</h2>
                <input
                  type="text"
                  required
                  name="ccv"
                  id="ccv"
                  placeholder="000"
                  className="border-2 border-red-100 rounded-8 h-10 w-full"
                />
              </label>
            </section>

            <div className="flex items-center my-7">
              <BsFillExclamationOctagonFill className="text-blue-500 mr-2" />
              <span className="text-gray-500">
                Credit card payment may take up to 30 minutes to be processed
              </span>
            </div>

            <label htmlFor="remember" className="flex items-center text-sm mb-5">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="h-4 w-4 mr-1"
              />
              <span className="font-medium">Save my details for future purchases</span>
            </label>

            <button
              className={`${
                style.button
              } ${isLoading ? style.loading : ''} ${
                isDone ? style.done : ''
              }`}
              onClick={handlePurchase}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : isDone ? 'Completed' : 'Continue purchase'}
            </button>
          </form>
        </section>
      </section>
    </section>
  );
}
