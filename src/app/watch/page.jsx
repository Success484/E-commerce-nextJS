import React from 'react'
import Watch from './Watch'

export const watch = [
    {
      "id": 1,
      "name": "Classic Stainless Steel Watch",
      "price": "2,500",
      "description": "A timeless stainless steel watch for a sophisticated look.",
      "image": "/watch1.png",
      "class": "watch"
    },
    {
      "id": 2,
      "name": "Leather Strap Watch",
      "price": "2,000",
      "description": "A stylish leather strap watch for everyday elegance.",
      "image": "/watch2.png",
      "class": "watch"
    },
    {
      "id": 3,
      "name": "Sporty Chronograph Watch",
      "price": "3,000",
      "description": "A sporty chronograph watch with multiple dials for active individuals.",
      "image": "/watch6.png",
      "class": "watch"
    },
    {
      "id": 4,
      "name": "Rose Gold Elegance Watch",
      "price": "2,800",
      "description": "An elegant rose gold watch for special occasions.",
      "image": "/watch3.png",
      "class": "watch"
    },
    {
      "id": 5,
      "name": "Digital Smartwatch",
      "price": "3,500",
      "description": "A versatile digital smartwatch with fitness tracking features.",
      "image": "/smartwatch.png",
      "class": "watch"
    },
    {
      "id": 6,
      "name": "Diver's Waterproof Watch",
      "price": "2,700",
      "description": "A waterproof diver's watch for aquatic adventures.",
      "image": "/watch5.png",
      "class": "watch"
    },
    {
      "id": 7,
      "name": "Minimalist Silver Watch",
      "price": "2,200",
      "description": "A minimalist silver watch with a clean design.",
      "image": "/watch7.png",
      "class": "watch"
    },
    {
      "id": 8,
      "name": "Luxury Watch",
      "price": "3,800",
      "description": "A luxury gold-plated watch for a touch of opulence.",
      "image": "/watch4.png",
      "class": "watch"
    }
  ]

export default function page() {
  return (
    <div>
        <Watch watch = {watch}/>
    </div>
  )
}
