import { clothes } from "@/app/page"
import Image from "next/image"
import Link from "next/link"

export default function page({params}) {
 const items = clothes.find (pro => pro.name.split(' ').join('') == params.slug)
  return (
    <section className="bg-gray-200 p-[15px] w-[100%] h-[100%]">
       
        
        <section className="lg:flex sm:grid">

          <Image src={items.image} height={330} width={629} alt={items.name} className="bg-gray-100 sm:mb-4"/> 

        <section className='px-[70px]'>
          <h2 className="text-[28px] font-[400px] leading-[28px] sm:mt-4 ml-10">Sweet lower prices</h2>
          <h2 className="text-gray-700 leading-[24px] py-2 text-[16px] ml-10">High-quality product</h2>
           <form action="/payment" className="my-3">
          <section className='hover:bg-green-100 py-5 px-8 border-solid border-4 hover:border-gray-400 active:bg-blue-100 ease-in-out duration-300'>
          <input type="radio" id="price" name="fav_language" value="price" required />
         <label for="price" className="leading-[24px] font-semibold ml-[3px]">&#8358;{items.price} {items.name}</label> 
          </section>
                       {/* <br /> */}
          <section className='hover:bg-green-100 py-5 px-8 border-solid border-4 hover:border-gray-400 active:bg-blue-100 
          focus:outline-none focus:ring focus:ring-violet-300 ease-in-out duration-300'>        
         <input type="radio" id="next" name="fav_language" value="next" required />
         <label for="next" className="leading-[24px]"> <span>10% discount per month &#8358;{items.price}</span></label>
        </section>
  <br />
  <Link href="/payment">
         <button type="button" className="bg-red-500 text-white py-5 hover:bg-red-600 hover:border hover:border-x-white px-[100px] rounded-[8px] leading-[24px]">Proceed With Purchase</button>
  </Link>
         </form>
          </section>
          </section>
          <h2 className="text-[30px] font-semibold">Description</h2>
          <h2 className=" p-[15px]">{items.description}</h2>
    </section>
  )
}
