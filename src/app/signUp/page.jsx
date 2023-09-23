import {FaFacebook, FaGoogle, FaInstagram, FaRegEnvelope} from 'react-icons/fa'
import {HiOutlineUser} from 'react-icons/hi'
import {MdLockOutline} from 'react-icons/md'

export default function App() {
  return (
    <section className=" pt-5 flex flex-col items-center justify-center w-full flex-1 px-20 text-center ease-in duration-300">





      
      <span className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">


      <span className="w-3/5 bg-orange-600 text-white rounded-tr-2x1 rounded-br-2x1 py-36 px-12">
          <h2 className="text-3x1 font-bold mb-2">Hello, Friend</h2>
          <span className='border-2 w-10 border-white   inline-block mb-2'></span>
          <p className='mb-10'>Fill up personal information and start journey with us.</p>
          <a href="login" className="border-2 border-white rounded-full px-12 py-2 font-semibold hover:bg-white hover:text-orange-600">Sign in</a>
        </span>


        <span className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-black">Wares</span>
            </div>
            <span className="py-10">
              <h2 className="text-3x1 font-bold text-orange-600 mb-2">Sign in to account</h2>

              <span className='border-2 w-10 border-orange-500 inline-block mb-2'></span>
                <span className="flex justify-center my-2">
                  <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaFacebook className='text-sm' />
                  </a>

                  <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaInstagram className='text-sm' />
                  </a>

                  <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaGoogle className='text-sm' />
                  </a>
                </span>
                {/* social icons section */}
                <p className='text-200px'>or use your email account</p>
                <span className='flex flex-col items-center'>

                <span className='bg-gray-100 mt-3 w-64 p-2 flex items-center mb-3'><HiOutlineUser className='text-gray-400 m-2'/>
                  <input type='text' name='name' required placeholder='name' className='bg-gray-100 outline-none text-sm flex-1' />
                  </span>

                  <span className='bg-gray-100 w-64 p-2 flex items-center'><FaRegEnvelope className='text-gray-400 m-2'/>
                  <input type='email' name='email' required placeholder='email' className='bg-gray-100 outline-none text-sm flex-1' />
                  </span>

                  <span className='bg-gray-100 mt-3 w-64 p-2 flex items-center'><MdLockOutline className='text-gray-400 m-2'/>
                  <input type='password' name='password' required placeholder='password' className='bg-gray-100 outline-none text-sm flex-1' />
                  </span>

                  <span className='flex justify-between w-64 mb-5 mt-3'>
                    <label className='flex items-center text-xs'>
                      <input type='checkbox' name='remember' className='mr-1'/>remember me
                    </label>
                    <a href="#" className='text-xs'>Forgot password?</a>
                  </span>

                  <a href="/" className="border-2 border-orange-500 rounded-full px-12 py-2 font-semibold hover:bg-orange-600 hover:text-white">Signup</a>
                </span>
          </span>
        </span>


        
      </span>
    </section>
  );
}
