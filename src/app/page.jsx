import React from 'react'
import NewProduct from './components/NewProduct'
import { EmblaCarousel } from './components/EmbiaCarousel'
import { Testimonia } from './components/Testimonia'
import Costumers from './components/Costumers'

export const clothes = [
    {
        "id": 1,
        "name": "Pure Leather Bag",
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
        "name": "Leather Briefcase",
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
        "name": "Pure Classic Watch",
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
        "name": "Extra Hot Glass",
        "price": "34,000",
        "description": "A pair of round-frame eyeglasses, offering a trendy and intellectual look.",
        "image": "/glass3.png",
        "class" : "glass"
    },
    {
        "id": 11,
        "name": "Classical Shoe",
        "price": "19,000",
        "description": "A collection of fashionable sneakers, offering comfort and versatility in various designs.",
        "image": "/shoe2.png",
        "class" : "shoe"
    },
    {
        "id": 12,
        "name": "Pure Leather Shoe",
        "price": "29,000",
        "description": "Stylish suede desert boots, suitable for both casual and semi-formal occasions.",
        "image": "/shoe1.png",
        "class" : "shoe"
    },
    {
        "id": 13,
        "name": "Classy Fregrant Perfume",
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
        "name": "Leather Tote Bag",
        "price": "1200",
        "description": "A classic leather tote bag for everyday style.",
        "image": "/bag8.jpg",
        "class": "bag"
      },
      {
        "id": 31,
        "name": "Canvas Shoulder Bag",
        "price": "850",
        "description": "A versatile canvas shoulder bag for casual outings.",
        "image": "/bag7.jpg",
        "class": "bag"
      },
      {
        "id": 32,
        "name": "Designer Clutch Bag",
        "price": "1500",
        "description": "A designer clutch for special occasions and events.",
        "image": "/bag6.jpg",
        "class": "bag"
      },
      {
        "id": 33,
        "name": "Classic Black Briefcase",
        "price": "25,000",
        "description": "A timeless black suit for formal occasions.",
        "image": "/brief8.png",
        "class": "case"
      },
      {
        "id": 34,
        "name": "Navy Blue Briefcase",
        "price": "30,000",
        "description": "A stylish navy blue slim fit suit.",
        "image": "/brief7.png",
        "class": "case"
      },
      {
        "id": 35,
        "name": "Classic Briefcase",
        "price": "28,000",
        "description": "A versatile charcoal gray suit.",
        "image": "/brief6.png",
        "class": "case"
      },
      {
        "id": 36,
        "name": "Leather Briefcase",
        "price": "32,000",
        "description": "A classic brown tweed suit for a rustic look.",
        "image": "/brief5.png",
        "class": "case"
      },
      {
        "id": 37,
        "name": "Classic Black Cap",
        "price": "₦500",
        "description": "A stylish black cap for everyday wear.",
        "image": "/capblack.png",
        "class": "cap"
      },
      {
        "id": 38,
        "name": "Red Snapback Cap",
        "price": "550",
        "description": "A trendy red snapback cap for a casual look.",
        "image": "/capred.png",
        "class": "cap"
      },
      {
        "id": 39,
        "name": "Classic Wool Coat",
        "price": "2500",
        "description": "A classic wool coat for timeless elegance.",
        "image": "/coat4.jpg",
        "class": "coat"
      },
      {
        "id": 40,
        "name": "Eau de Parfume",
        "price": "1800",
        "description": "A floral delight with a captivating fragrance.",
        "image": "/perfume4.jpg",
        "class": "perfume"
      },
      {
        "id": 41,
        "name": "Citrus Perfume",
        "price": "1500",
        "description": "An invigorating citrus scent for a fresh feeling.",
        "image": "/perfume5.jpg",
        "class": "perfume"
      },
      {
        "id": 42,
        "name": "Oud Wood Perfume",
        "price": "2100",
        "description": "A rich and luxurious Oud Wood perfume oil.",
        "image": "/perfume6.jpg",
        "class": "perfume"
      },
      {
        "id": 43,
        "name": "Spicy Amber Eau de Parfume",
        "price": "2200",
        "description": "A spicy amber scent for a bold and exotic aura.",
        "image": "/perfume7.jpg",
        "class": "perfume"
      },
      {
        "id": 44,
        "name": "Fresh Ocean Breeze Perfume",
        "price": "1600",
        "description": "A fresh ocean breeze cologne for a clean and crisp scent.",
        "image": "/perfume8.jpg",
        "class": "perfume"
      },
      {
        "id": 45,
        "name": "Trench Coat",
        "price": "1800",
        "description": "A stylish trench coat for a polished look.",
        "image": "/coat5.jpg",
        "class": "coat"
      },
      {
        "id": 46,
        "name": "Faux Fur Coat",
        "price": "2800",
        "description": "A faux fur parka for warmth and style.",
        "image": "/coat6.jpg",
        "class": "coat"
      },
      {
        "id": 47,
        "name": "Metallic Aviator Glasses",
        "price": "1,800",
        "description": "Metallic aviator glasses for a classic and iconic look.",
        "image": "/glass4.png",
        "class": "glass"
      },
      {
        "id": 48,
        "name": "Sporty Wraparound Glasses",
        "price": "2,000",
        "description": "Sporty wraparound sunglasses for outdoor activities.",
        "image": "/glass5.png",
        "class": "glass"
      },
      {
        "id": 49,
        "name": "Retro Square Frame Glasses",
        "price": "1,300",
        "description": "Retro square frame glasses for a vintage-inspired look.",
        "image": "/glass6.png",
        "class": "glass"
      },
      {
        "id": 50,
        "name": "Designer Oversized Glasses",
        "price": "2,500",
        "description": "Designer oversized glasses for a bold and fashionable statement.",
        "image": "/glass7.png",
        "class": "glass"
      },
      {
        "id": 51,
        "name": "Wooden Frame glasses",
        "price": "1,700",
        "description": "Wooden frame sunglasses for a natural and eco-friendly style.",
        "image": "/glass8.png",
        "class": "glass"
      },
      {
        "id": 52,
        "name": "Puffer Coat",
        "price": "1500",
        "description": "A cozy puffer jacket for cold weather.",
        "image": "/coat7.jpg",
        "class": "coat"
      },
      {
        "id": 53,
        "name": "Long Coat",
        "price": "2200",
        "description": "A long overcoat for a sophisticated winter look.",
        "image": "/coat8.jpg",
        "class": "coat"
      },
      {
        "id": 54,
        "name": "Green Camouflage Cap",
        "price": "650",
        "description": "A camouflage-patterned cap for outdoor enthusiasts.",
        "image": "/capgreen.png",
        "class": "cap"
      },
      {
        "id": 55,
        "name": "Vintage Brown Cap",
        "price": "700",
        "description": "A vintage-style brown cap for a retro vibe.",
        "image": "/cap5.png",
        "class": "cap"
      },
      {
        "id": 56,
        "name": "Gray Woolen Cap",
        "price": "550",
        "description": "A warm and cozy gray woolen cap for cold days.",
        "image": "/cap4.png",
        "class": "cap"
      },
      {
        "id": 57,
        "name": "Classic Leather Shoes",
        "price": "1500",
        "description": "Classic leather loafers for a timeless look.",
        "image": "/shoe4.jpg",
        "class": "shoe"
      },
      {
        "id": 58,
        "name": "Sneakers Shoe",
        "price": "1200",
        "description": "Comfortable sneakers for an active lifestyle.",
        "image": "/shoe5.jpg",
        "class": "shoe"
      },
      {
        "id": 59,
        "name": "Formal Oxford Shoes",
        "price": "1800",
        "description": "Formal Oxford shoes for elegant occasions.",
        "image": "/shoe6.jpg",
        "class": "shoe"
      },
      {
        "id": 60,
        "name": "Casual Canvas Shoe",
        "price": "900",
        "description": "Casual canvas slip-on shoes for everyday comfort.",
        "image": "/shoe7.jpg",
        "class": "shoe"
      },
      {
        "id": 61,
        "name": "Digital Smart watch",
        "price": "3,500",
        "description": "A versatile digital smartwatch with fitness tracking features.",
        "image": "/smartwatch.png",
        "class": "watch"
      },
      {
        "id": 62,
        "name": "Diver's Waterproof Watch",
        "price": "2,700",
        "description": "A waterproof diver's watch for aquatic adventures.",
        "image": "/watch5.png",
        "class": "watch"
      },
      {
        "id": 63,
        "name": "Minimalist Silver Watch",
        "price": "2,200",
        "description": "A minimalist silver watch with a clean design.",
        "image": "/watch7.png",
        "class": "watch"
      },
      {
        "id": 64,
        "name": "Luxury Watch",
        "price": "3,800",
        "description": "A luxury gold-plated watch for a touch of opulence.",
        "image": "/watch4.png",
        "class": "watch"
      },
      {
        "id": 65,
        "name": "Running and Training Shoes",
        "price": "1400",
        "description": "Running and training shoes for fitness enthusiasts.",
        "image": "/shoe8.jpg",
        "class": "shoe"
      },
      {
        "id": 66,
        "name": "Slim Fit Briefcase",
        "price": "35,000",
        "description": "A sleek black tuxedo for special occasions.",
        "image": "/brief4.png",
        "class": "case"
      },
      {
        "id": 67,
        "name": "Crossbody Sling Bag",
        "price": "1800",
        "description": "A crossbody sling bag for hands-free convenience.",
        "image": "/bag5.jpg",
        "class": "bag"
      },
      {
        "id": 68,
        "name": "Boho Fringe Bag",
        "price": "2100",
        "description": "A boho-inspired fringe bag for a free-spirited look.",
        "image": "/bag4.jpg",
        "class": "bag"
      },
    {
        "id": 69,
        "name": "Nice Fregrant Perfume",
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
