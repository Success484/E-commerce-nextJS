import React from 'react'
import NewProduct from './components/NewProduct'
import { EmblaCarousel } from './components/EmbiaCarousel'
import { Testimonia } from './components/Testimonia'
import Costumers from './components/Costumers'

export const clothes = [
    {
        "id": 1,
        "name": "Pure Leather",
        "price": "15,000",
        "description": " An exquisite designer clutch with intricate detailing, adding a touch of glamour to your evening ensemble.",
        "image": "/bag1.png",
        "class" : "bag"
    },
    {
        "id": 2,
        "name": "Classic Briefcase",
        "price": "40,000",
        "description": "A sleek and slim nylon messenger bag, perfect for the on-the-go professional.",
        "image": "/case1.png",
        "class" : "case"
    },
    {
        "id": 3,
        "name": "Product C",
        "price": "14,000",
        "description": " A professional leather laptop briefcase, providing organization and style for business meetings.",
        "image": "/case2.png",
        "class" : "case"
    },

    // jhhdhdhd
    {
        "id": 4,
        "name": "Classy Bag",
        "price": "30,000",
        "description": " A versatile and durable canvas backpack designed for both fashion and function, ideal for outdoor adventures.",
        "image": "/bag2.png",
        "class" : "bag"
    },
    {
        "id": 5,
        "name": "Soft Hoodie",
        "price":" 50,000",
        "description": "A cozy and timeless classic hoodie, made for comfort and warmth on chilly days.",
        "image": "/hoodie2.png",
        "class" : "hoodie"
    },
    {
        "id": 6,
        "name": "Nice Shoes",
        "price": "10,400",
        "description": "Classic leather loafers that effortlessly blend comfort and sophistication, perfect for formal events.",
        "image": "/shoe3.png",
        "class" : "shoe"
    },
    {
        "id": 7,
        "name": "Pure Classic",
        "price": "24,000",
        "description": "A sleek and minimalist dress watch that complements formal attire, making a subtle statement.",
        "image": "/watch1.png",
        "class" : "watch"
    },
    {
        "id": 8,
        "name": "Soft Hoodie",
        "price": "49,000",
        "description": "An athletic-inspired zip-up hoodie, combining sporty style with everyday comfort.",
        "image": "/hoodie1.png",
        "class" : "hoodie"
    },

    
    {
        "id": 9,
        "name": "Leather Bag",
        "price": "12,000",
        "description": "A stylish and spacious tote bag crafted from genuine leather, perfect for carrying your essentials in elegance..",
        "image": "/bag3.png",
        "class" : "bag"
    },
    {
        "id": 10,
        "name": "Extra hot",
        "price": "34,000",
        "description": "A pair of round-frame eyeglasses, offering a trendy and intellectual look.",
        "image": "/glass3.png",
        "class" : "glass"
    },
    {
        "id": 11,
        "name": "Classical",
        "price": "19,000",
        "description": "A collection of fashionable sneakers, offering comfort and versatility in various designs.",
        "image": "/shoe2.png",
        "class" : "shoe"
    },
    {
        "id": 12,
        "name": "Pure Leather",
        "price": "29,000",
        "description": "Stylish suede desert boots, suitable for both casual and semi-formal occasions.",
        "image": "/shoe1.png",
        "class" : "shoe"
    },
    {
        "id": 13,
        "name": "Classy Fregrant",
        "price": "14,950",
        "description": " A refreshing citrus blossom perfume, capturing the essence of a vibrant summer garden.",
        "image": "/perfume3.png",
        "class" : "perfume"
    },
    {
        "id": 14,
        "name": "Eye Glass",
        "price": "59,990",
        "description": "Modern aviator frames that provide a timeless and sophisticated eyewear choice.",
        "image": "/glass2.png",
        "class" : "glass"
    },
    {
        "id": 15,
        "name": "Classy Glass",
        "price": "9,990",
        "description": "Cat-eye prescription glasses that combine elegance with a hint of vintage flair.",
        "image": "/glass1.png",
        "class" : "glass"
    },
    {
        "id": 16,
        "name": "Classic Belt",
        "price": "39,990",
        "description": "A designer logo belt that showcases your fashion-forward style, making a statement wherever you go..",
        "image": "/belt1.png",
        "class" : "belt"
    },
    {
        "id": 17,
        "name": "Brifecase",
        "price": "24,990",
        "description": "A vintage-inspired briefcase with a unique charm, ideal for adding character to your work attire.",
        "image": "/case3.png",
        "class" : "case"
    },
    {
        "id": 18,
        "name": "Classy Coat",
        "price": "49,990",
        "description": "A warm and insulated winter parka coat, designed to keep you cozy during the coldest months.",
        "image": "/coat3.png",
        "class" : "coat"
    },
    {
        "id": 19,
        "name": "Face Cap",
        "price": "12,990",
        "description": " A classic baseball cap, offering sun protection and a sporty vibe for your casual outfits.",
        "image": "/cap3.png",
        "class" : "cap"
    },
    {
        "id": 20,
        "name": "Classc Belt",
        "price": "34,990",
        "description": "A durable canvas web belt with a military-inspired design, ideal for a rugged look.",
        "image": "/belt2.png",
        "class" : "belt"
    },{
        "id": 21,
        "name": "Nice Coast",
        "price": "19,990",
        "description": "A classic trench coat, exuding timeless style and sophistication, suitable for any occasion.",
        "image": "/coat1.png",
        "class" : "coat"
    },
    {
        "id": 22,
        "name": "Cool Hoodie",
        "price": "29,990",
        "description": "Versatile product B suitable for various tasks.",
        "image": "/hoodie3.png",
        "class" : "hoodie"
    },
    {
        "id": 23,
        "name": "Classic Perfume",
        "price": "14,950",
        "description": "A trendy hoodie featuring eye-catching graphic prints, expressing your unique personality.", 
        "image": "/perfume1.png",
        "class" : "perfume"
    },
    {
        "id": 24,
        "name": "Classy Cap",
        "price": "9,909",
        "description": " A stylish snapback hat with adjustable fit, perfect for a touch of urban streetwear.",
        "image": "/cap2.png",
        "class" : "cap"
    },
    {
        "id": 25,
        "name": "Leather belt",
        "price": "12,899",
        "description": "A genuine leather belt that adds refinement to any outfit, available in classic colors.",
        "image": "/belt3.png",
        "class" : "belt"
    },
    {
        "id": 26,
        "name": "High Watch",
        "price": "39,990",
        "description": "A smart fitness watch equipped with health tracking features, perfect for an active lifestyle.",
        "image": "/watch3.png",
        "class" : "watch"
    },
    {
        "id": 27,
        "name": "Soft coat",
        "price": "24,990",
        "description": "A stylish quilted puffer jacket that offers both warmth and contemporary fashion.",
        "image": "/coat2.png",
        "class" : "coat"
    },
    {
        "id": 28,
        "name": "Face Cap",
        "price": "19,00",
        "description": " A fashionable wool fedora that adds sophistication to your attire, suitable for formal or casual occasions.",
        "image": "/cap1.png",
        "class" : "cap"
    },
    {
        "id": 29,
        "name": "Classy Watch",
        "price": "20,990",
        "description": "A luxurious chronograph watch with precision engineering, blending sophistication and functionality.",
        "image": "/watch2.png",
        "class" : "watch"
    },
    {
        "id": 30,
        "name": "Fregrant",
        "price": "34,099",
        "description": "A delicate floral eau de parfum, perfect for adding a touch of elegance to your everyday routine.",
        "image": "/perfume2.png",
        "class" : "perfume"
    }

]

export default function page() {
  return (
    <main>
        <EmblaCarousel />
        <NewProduct items = {clothes} />
        <Costumers />
        <Testimonia />
    </main>
  )
}
